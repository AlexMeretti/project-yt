import Fetching from "../../common/fetching/Fetching";
import styles from "./AuthTrue.module.scss";
import noAvatar from "./noAvatar.png";
const AuthTrue = (props) => {
  if (!props.profile) {
    return <Fetching />;
  } else
    return (
      <>
        <div className={styles.avatar}>
          <img src={props.profile.photos.large || noAvatar} alt="avatar" />
        </div>
        <div className={styles.auth}>
          <p>{props.login}</p>
          <button onClick={props.logout}>Logout</button>
        </div>
      </>
    );
};

export default AuthTrue;
