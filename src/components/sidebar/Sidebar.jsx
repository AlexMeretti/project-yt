import React from 'react';
import LeftMenu from './components/LeftMenu/LeftMenu';
import SidebarFriends from './components/SidebarFriends/SidebarFriends';

const Sidebar = (props) => {
    return (
        <>
        <LeftMenu menu={props.sidebar.menu}/>
        <SidebarFriends friends={props.friends} />
        </>
        
    )
}
export default Sidebar