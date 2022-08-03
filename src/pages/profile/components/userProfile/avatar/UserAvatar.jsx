import noAvatar from "./noAvatar.png";
import styles from "./UserAvatar.module.scss";
const UserPhoto = (props) => {
  return (
    <div className={styles.avatar}>
      <img alt="img" src={props.avatar !== null ? props.avatar : noAvatar} />
    </div>
  );
};
export default UserPhoto;
