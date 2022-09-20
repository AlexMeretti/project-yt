import { FC } from "react";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import { ProfileType } from "../../../../types/types";
import { profileActions } from "../../../../redux/reducers/profile-reducer";

type PropsTypes = {
  profile: ProfileType
  owner: boolean
}
const UserData: FC<PropsTypes> = ({ profile, owner }) => {
  const isContactsSectionShown = Object.values(profile.contacts).some(Boolean)
const dispatch = useDispatch()
  return (
    <div className='userData'>
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
      {isContactsSectionShown ? <p className='contacts'>Contacts:</p>: null}
      <ul>
        {Object.entries(profile.contacts).map((el) => {
          if (el[1]) {
            return (<li key={el[0]}>{el[0] + ": "}<span>{el[1]}</span></li>);
          } else return null;
        })}
      </ul>
      {owner && (
        <Button size='small' type='primary' onClick={() => dispatch(profileActions.profileEditModeToggle(true))}>Edit information</Button>
      )}
    </div>
  );
};

export default UserData;
