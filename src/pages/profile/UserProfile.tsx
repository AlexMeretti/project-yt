import { Skeleton } from "antd";
import { FC } from "react";
import { useSelector } from "react-redux";
import Fetching from "../../components/common/fetching/Fething";
import { getProfile } from "../../redux/selectors/profile-selector";
import UserAvatar from "./avatar/UserAvatar";
import UserInfo from "./info/UserInfo";

export type PropsTypes = {
    owner: boolean
}
const UserProfile: FC<PropsTypes> = ({owner}) => {
  const profile = useSelector(getProfile)
  if (!profile) {
    return <div className="userProfileSkeleton">
      <div className="avatar">
        <Skeleton.Avatar active size={200} shape={'circle'} />
      </div>
      <div className="info">
      <Skeleton paragraph={{rows: 4, width: 300}} active/>
      </div>
    </div>
  } else
    return <div className="userProfile">
      <UserAvatar
        avatar={profile.photos.large}
        owner={owner}
      /> 
      <UserInfo
        profile={profile}
        owner={owner}
      />
    </div>
};
export default UserProfile;
