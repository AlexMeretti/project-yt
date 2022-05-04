import React from 'react';
import ContentPageProfile from './components/ContentPageProfile'
import Header from '../../components/header/Header'
import LeftMenu from '../../components/leftmenu/LeftMenu'
import '../../Index.scss'

const PageProfile = () => {
    return(
        <div className="gridContainer">
                <Header />
                <LeftMenu />
                <ContentPageProfile />
        </div>
    )
}
export default PageProfile