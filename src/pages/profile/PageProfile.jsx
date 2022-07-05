import React from "react";
import ContentImg from "./components/imageProfile/ImageProfile";
import UserProfile from "./components/UserProfile/UserProfile";
import MyPostsContainer from "./components/myposts/MyPostsContainer";

const PageProfile = () => {
  return (
    <>
      <ContentImg />
      <UserProfile />
      <MyPostsContainer />
    </>
  );
};

export default PageProfile;
