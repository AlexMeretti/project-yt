import { FC } from "react";
import { useSelector } from "react-redux";
import Fetching from "../../../components/common/fetching/Fething";
import { getProfile } from "../../../redux/selectors/profile-selector";
import UserDescription from "./userProfile/UserDescription";

export type PropsTypes = {
    owner: boolean
}
const UserProfile: FC<PropsTypes> = ({owner}) => {
  const profile = useSelector(getProfile)
  if (!profile) {
    return <Fetching />;
  } else
    return (
      <>
        <UserDescription owner={owner} profile={profile}
        />
        {/* <UserPosts avatar={profile.photos.small} owner={props.owner} /> */}
      </>
    );
};
export default UserProfile;
