import React from 'react';
import '../PageProfile.module.scss'
import ContentImg from './ContentImg'
import ContentProfile from './ContentProfile'
import MyPosts from './myposts/MyPosts';

const ContentPageProfile = () => {
    return (
        <div className="gridItemContent">
            <ContentImg />
            <ContentProfile />
            <MyPosts />
        </div>
    )
}
export default ContentPageProfile