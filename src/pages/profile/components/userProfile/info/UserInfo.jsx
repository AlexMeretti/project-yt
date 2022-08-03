import UserStatus from "./status/UserStatus";
import styles from "./UserInfo.module.scss";

const UserInfo = (props) => {
  return (
    <div className={styles.info}>
      <div className={styles.name}>{props.profile.fullName}</div>
      <UserStatus
        status={props.status}
        setProfileStatus={props.setProfileStatus}
      />
      <ul>
        {props.profile.aboutMe !== null || "" ? (
          <li>
            About me:
            <span> {props.profile.aboutMe}</span>
          </li>
        ) : null}
        <li>
          Looking for a job:{" "}
          {props.profile.lookingForAJob ? (
            <span>find job</span>
          ) : (
            <span>No</span>
          )}
        </li>
        {props.profile.lookingForAJobDescription !== null || "" ? (
          <li>
            Job description:
            <span> {props.profile.lookingForAJobDescription}</span>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default UserInfo;
