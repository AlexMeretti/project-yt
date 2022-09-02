import { useSelector } from "react-redux";
import { logout } from "../../../redux/auth-reducer";
import {
  getAuthLogin,
  getAuthProfile,
} from "../../../redux/selectors/auth-selector";
import Fetching from "../../common/fetching/Fething";
//@ts-ignore
import styles from "./AuthTrue.module.scss";
//@ts-ignore
import noAvatar from "../../../assets/noAvatar.png";
import { useTypedThunkDispatch } from "../../../redux/redux-store";
const AuthTrue = () => {
  const authProfile = useSelector(getAuthProfile);
  const authLogin = useSelector(getAuthLogin);
  const dispatch = useTypedThunkDispatch()
  if (!authProfile) {
    return <Fetching />;
  } else
    return (
      <>
        <div className={styles.avatar}>
          <img src={authProfile.photos.large || noAvatar} alt="avatar" />
        </div>
        <div className={styles.auth}>
          <p>{authLogin}</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      </>
    );
};

export default AuthTrue;
