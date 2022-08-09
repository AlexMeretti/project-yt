import React from "react";
import Fetching from "../../components/common/fetching/Fetching";
import UserPostsContainer from "./components/userPosts/UserPostsContainer";
import UserDescription from "./components/userProfile/UserDescription";

const UserProfile = ({
  profilePage,
  setProfileStatus,
  owner,
  setAvatar,
  setProfileData,
  profileEditModeToggle,
}) => {
  if (profilePage.profile === null) {
    return <Fetching />;
  } else
    return (
      <>
        <UserDescription
          profileEditMode={profilePage.profileEditMode}
          profileEditModeToggle={profileEditModeToggle}
          setProfileData={setProfileData}
          setAvatar={setAvatar}
          owner={owner}
          profile={profilePage.profile}
          status={profilePage.status}
          setProfileStatus={setProfileStatus}
        />
        <UserPostsContainer owner={owner} />
      </>
    );
};
export default UserProfile;
