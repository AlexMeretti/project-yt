import React from "react";
import ContentImg from "./components/imageProfile/ImageProfile";
import UserProfile from "./components/UserProfile/UserProfile";
import MyPostsContainer from "./components/myposts/MyPostsContainer";

const PageProfile = (props) => {
  return (
    <>
      <ContentImg />
      <UserProfile />
      <MyPostsContainer store={props.store} dispatch={props.dispatch} />
    </>
  );
};
export default PageProfile;
