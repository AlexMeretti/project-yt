//@ts-ignore
import { FC } from "react";
import { ProfileType } from "../../../../../../types/types";
import { profileActions } from '../../../../../../redux/profile-reducer'
//@ts-ignore
import styles from "./scss/UserData.module.scss";
import { useDispatch } from "react-redux";

type PropsTypes = {
  profile: ProfileType
  owner: boolean
}
const UserData: FC<PropsTypes> = ({ profile, owner }) => {
const dispatch = useDispatch()
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
        <button onClick={() => dispatch(profileActions.profileEditModeToggle(true))}>
          Edit information
        </button>
      )}
    </div>
  );
};

export default UserData;
