import { Link } from "react-router-dom";
import styles from "./UserElement.module.scss";
import noAvatar from "./noAvatar.png";

const UserElement = ({
  avatar,
  name,
  userId,
  status,
  unfollowThunk,
  followThunk,
  isFollowingProcess,
  followed,
}) => {
  return (
    <div className={styles.usersBlock}>
      <div className={styles.avatar}>
        <img src={avatar ? avatar : noAvatar} alt={name} />
      </div>
      <div className={styles.description}>
        <p className={styles.name}>
          <Link to={`/profile/` + userId}>{name}</Link>
        </p>
        <p className={styles.status}>{status}</p>
      </div>
      <div className={styles.toggleButtons}>
        {followed ? (
          <button
            disabled={isFollowingProcess.some((id) => id === userId)}
            className={styles.removeFriendButton}
            onClick={() => {
              unfollowThunk(userId);
            }}
          >
            Remove friend
          </button>
        ) : (
          <button
            disabled={isFollowingProcess.some((id) => id === userId)}
            className={styles.addFriendButton}
            onClick={() => {
              followThunk(userId);
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
