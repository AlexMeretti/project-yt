import styles from "./UserDescription.module.scss";
import UserInfo from "./info/UserInfo";
import UserAvatar from "./avatar/UserAvatar";
const UserDescription = ({
  profile,
  setProfileStatus,
  status,
  owner,
  setAvatar,
  setProfileData,
  profileEditModeToggle,
  profileEditMode,
}) => {
  return (
    <>
      <div className={styles.profile}>
        <UserAvatar
          avatar={profile.photos.large}
          owner={owner}
          setAvatar={setAvatar}
        />
        <UserInfo
          profileEditMode={profileEditMode}
          profileEditModeToggle={profileEditModeToggle}
          setProfileData={setProfileData}
          profile={profile}
          setProfileStatus={setProfileStatus}
          status={status}
          owner={owner}
        />
      </div>
    </>
  );
};
export default UserDescription;
