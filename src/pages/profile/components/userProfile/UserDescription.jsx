import styles from "./UserDescription.module.scss";
import UserInfo from "./info/UserInfo";
import UserAvatar from "./avatar/UserAvatar";
const UserDescription = (props) => {
  return (
    <>
      <div className={styles.profile}>
        <UserAvatar avatar={props.profile.photos.large} />
        <UserInfo {...props} />
      </div>
    </>
  );
};
export default UserDescription;
