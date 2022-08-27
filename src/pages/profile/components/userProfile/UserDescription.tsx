// @ts-ignore 
import styles from "./UserDescription.module.scss";
import UserInfo from "./info/UserInfo";
import UserAvatar from "./avatar/UserAvatar";
import { ProfileType } from "../../../../types/types";
import { FC } from "react";
type PropsTypes = {
  profile: ProfileType
  owner: boolean
}
const UserDescription: FC<PropsTypes> = ({profile, owner}, props) => {
  return (
    <>
      <div className={styles.profile}>
        <UserAvatar
          avatar={profile.photos.large}
          owner={owner}
        />
        <UserInfo
          profile={profile}
          owner={owner}
        />
      </div>
    </>
  );
};
export default UserDescription;
