import styles from "./UserData.module.scss";

const UserData = ({ profile, profileEditModeToggle, owner }) => {
  return (
    <div className={styles.userData}>
      <ul>
        {profile.aboutMe && (
          <li>
            About me:
            <span> {profile.aboutMe}</span>
          </li>
        )}
        <li>
          Looking job:
          {profile.lookingForAJob ? <span> yes</span> : <span> no</span>}
        </li>
        {profile.lookingForAJobDescription && (
          <li>
            Job description:
            <span> {profile.lookingForAJobDescription}</span>
          </li>
        )}
      </ul>
      <ul>
        {Object.entries(profile.contacts).map((el) => {
          if (el[1]) {
            return (
              <li key={el[0]}>
                {el[0] + ": "}
                <span>{el[1]}</span>
              </li>
            );
          } else return null;
        })}
      </ul>
      {owner && (
        <button onClick={() => profileEditModeToggle(true)}>
          Edit information{" "}
        </button>
      )}
    </div>
  );
};

export default UserData;
