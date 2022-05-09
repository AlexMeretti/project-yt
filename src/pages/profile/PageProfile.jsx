import React from 'react';
import ContentImg from './components/imageProfile/ImageProfile'
import UserProfile from './components/UserProfile/UserProfile'
import MyPosts from './components/myposts/MyPosts';

const PageProfile = (props) => {
    return (
            <>
            <ContentImg />
            <UserProfile />
            <MyPosts posts={props.data.posts}/>
            </>
    )
}
export default PageProfile