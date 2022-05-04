import React from 'react';
import '../PageProfile.module.scss'
import ContentImg from './ContentImg'
import ContentProfile from './ContentProfile'

const ContentPageProfile = () => {
    return (
        <div className="gridItemContent">
            <ContentImg />
            <ContentProfile />
        </div>
    )
}
export default ContentPageProfile