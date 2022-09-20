import {useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
  getProfile,
  getProfileStatus,
} from "../../redux/reducers/profile-reducer";
import { useTypedThunkDispatch } from "../../redux/redux-store";
import { getAuthId} from "../../redux/selectors/auth-selector";
import UserProfile from "./UserProfile";


const PageProfile = () => {
  const paramsId = useParams().id;
  const authId = useSelector(getAuthId)
  const dispatch = useTypedThunkDispatch()
  useEffect(() => {
    let userId: number
    const renderProfile = () => {
      if(paramsId) {
        userId = +paramsId
      } else if (authId) {
        userId = authId
      }
      dispatch(getProfile(userId));
      dispatch(getProfileStatus(userId));
    }
    renderProfile();
  }, [paramsId, authId, dispatch]);
  if(paramsId) {
    if(+paramsId === authId) {
      return <Navigate replace to="/profile" />
    }
  }
  if (!paramsId && !authId) {
    return <Navigate replace to="/" />;
  }
  return <div className="profilePage">
    <UserProfile owner={!paramsId} />
    </div>
};
export default PageProfile