import { Link } from "react-router-dom";
import styles from "./UserElement.module.scss";
import noAvatar from "./noAvatar.png";

const UserElement = (props) => {
  return (
    <div className={styles.usersBlock}>
      <div className={styles.avatar}>
        <img src={props.avatar ? props.avatar : noAvatar} alt={props.name} />
      </div>
      <div className={styles.description}>
        <p className={styles.name}>
          <Link to={`/profile/` + props.id}>{props.name}</Link>
        </p>
        <p className={styles.status}>{props.status}</p>
      </div>
      <div className={styles.toggleButtons}>
        {props.followed ? (
          <button
            disabled={props.isFollowingProcess.some((id) => id === props.id)}
            className={styles.removeFriendButton}
            onClick={() => {
              props.unfollowThunk(props.id);
            }}
          >
            Remove friend
          </button>
        ) : (
          <button
            disabled={props.isFollowingProcess.some((id) => id === props.id)}
            className={styles.addFriendButton}
            onClick={() => {
              props.followThunk(props.id);
            }}
          >
            Add friend
          </button>
        )}
      </div>
    </div>
  );
};
export default UserElement;
