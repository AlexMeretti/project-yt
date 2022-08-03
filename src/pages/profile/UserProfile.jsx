import React from "react";
import Fetching from "../../components/common/fetching/Fetching";
import UserPostsContainer from "./components/userPosts/UserPostsContainer";
import UserDescription from "./components/userProfile/UserDescription";

const UserProfile = (props) => {
  window.state = props;
  if (props.profilePage.profile === null) {
    return <Fetching />;
  } else
    return (
      <>
        <UserDescription
          profile={props.profilePage.profile}
          status={props.profilePage.status}
          setProfileStatus={props.setProfileStatus}
        />
        <UserPostsContainer />
      </>
    );
};
export default UserProfile;
