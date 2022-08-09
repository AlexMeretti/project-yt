import { reduxForm } from "redux-form";
import UserData from "./data/UserData";
import UserDataEdit from "./data/UserDataEdit";
import UserStatus from "./status/UserStatus";
import styles from "./UserInfo.module.scss";

const UserInfo = ({
  profile,
  setProfileStatus,
  status,
  setProfileData,
  owner,
  profileEditModeToggle,
  profileEditMode,
}) => {
  const editFormSubmit = (values) => {
    setProfileData(values);
  };
  return (
    <div className={styles.info}>
      <div className={styles.name}>{profile.fullName}</div>
      <UserStatus status={status} setProfileStatus={setProfileStatus} />
      {profileEditMode ? (
        <UserDataEditRedux
          profileEditModeToggle={profileEditModeToggle}
          profile={profile}
          initialValues={profile}
          onSubmit={editFormSubmit}
        />
      ) : (
        <UserData
          profile={profile}
          profileEditModeToggle={profileEditModeToggle}
          owner={owner}
        />
      )}
    </div>
  );
};
const UserDataEditRedux = reduxForm({ form: "editProfile" })(UserDataEdit);
export default UserInfo;
