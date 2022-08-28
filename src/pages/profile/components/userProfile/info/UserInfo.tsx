import { FC } from "react";
import { useSelector } from "react-redux";
import Fetching from "../../../../../components/common/fetching/Fething";
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
  if (!profile) {
    return <Fetching />
  } else
  return (
    <div className={styles.info}>
      <div className={styles.name}>{profile.fullName}</div>
      <UserStatus />
      {profileEditMode ? (
        <UserDataEdit
          profile={profile}
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
export default UserInfo;
