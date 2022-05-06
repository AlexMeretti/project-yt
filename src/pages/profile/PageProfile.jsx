import React from 'react';
import ContentImg from './components/imageProfile/ImageProfile'
import UserProfile from './components/UserProfile/UserProfile'
import MyPosts from './components/myposts/MyPosts';

const PageProfile = () => {
    return (
            <>
            <ContentImg />
            <UserProfile />
            <MyPosts />
            </>
    )
}
export default PageProfile