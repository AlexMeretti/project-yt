import { FC } from "react";
import { useSelector } from "react-redux";
import { reduxForm } from "redux-form";
import Fetching from "../../../../../components/common/fetching/Fething";
import { setProfileData } from "../../../../../redux/profile-reducer";
import { useTypedDispatch } from "../../../../../redux/redux-store";
import { getProfileEditMode } from "../../../../../redux/selectors/profile-selector";
import { ProfileType } from "../../../../../types/types";
import UserData from "./data/UserData";
import UserDataEdit from "./data/UserDataEdit";
import UserStatus from "./status/UserStatus";
//@ts-ignore
import styles from "./UserInfo.module.scss";
type PropsTypes = {
  profile: ProfileType | null
  owner: boolean
}
const UserInfo: FC<PropsTypes> = ({
  profile,
  owner,
}) => {
  const profileEditMode = useSelector(getProfileEditMode)
  const dispatch = useTypedDispatch()
  const editFormSubmit = (values: any) => {
    dispatch(setProfileData(values));
  };
  if (!profile) {
    return <Fetching />
  } else
  return (
    <div className={styles.info}>
      <div className={styles.name}>{profile.fullName}</div>
      <UserStatus />
      {profileEditMode ? (
        <UserDataEditRedux
        //@ts-ignore
          profile={profile}
          initialValues={profile}
          onSubmit={editFormSubmit}
        />
      ) : (
        <UserData
          profile={profile}
          owner={owner}
        />
      )}
    </div>
  );
};
//@ts-ignore
const UserDataEditRedux = reduxForm({ form: "editProfile" })(UserDataEdit);
export default UserInfo;
