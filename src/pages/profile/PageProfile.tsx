import {useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
  getProfile,
  getProfileStatus,
} from "../../redux/profile-reducer";
import { useTypedThunkDispatch } from "../../redux/redux-store";
import { getAuthId} from "../../redux/selectors/auth-selector";
import UserProfile from "./components/UserProfile";


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

  if (!paramsId && !authId) {
    return <Navigate replace to="/" />;
  }
  return <><UserProfile owner={!paramsId} /></>
};
export default PageProfile