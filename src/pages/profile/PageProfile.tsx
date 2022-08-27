import {useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
  getProfileThunk,
  getProfileStatusThunk,
} from "../../redux/profile-reducer";
import { useTypedDispatch } from "../../redux/redux-store";
import { getAuthId } from "../../redux/selectors/auth-selector";
import UserProfile from "./components/UserProfile";


const PageProfile = () => {
  const paramsId = useParams().id;
  const authId = useSelector(getAuthId)
  const dispatch = useTypedDispatch()
  useEffect(() => {
    let userId: number
    const renderProfile = () => {
      if(paramsId) {
        userId = +paramsId
      } else if (authId) {
        userId = authId
      }
      dispatch(getProfileThunk(userId));
      dispatch(getProfileStatusThunk(userId));
    }
    renderProfile();
  }, [paramsId, authId, getProfileThunk, getProfileStatusThunk]);

  if (!paramsId && !authId) {
    return <Navigate replace to="/" />;
  }
  return <><UserProfile owner={!paramsId} /></>
};
export default PageProfile