import React from 'react';
import LeftMenu from './components/LeftMenu/LeftMenu';
import SidebarFriends from './components/SidebarFriends/SidebarFriends';

const Sidebar = (props) => {
    
    return (
        <>
        <LeftMenu menu={props.data.menu}/>
        <SidebarFriends friends={props.data.friends} />
        </>
        
    )
}
export default Sidebar