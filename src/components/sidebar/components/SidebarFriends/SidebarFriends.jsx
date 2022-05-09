import React from 'react';
import styles from './SidebarFriends.module.scss'
import SomeFriend from './SomeFriend';

const SidebarFriends = (props) => {
    const elementFriend = props.friends.map( el => <SomeFriend name={el.name} photo={el.photo} />)
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <p>My friends</p>
            </div>
                { elementFriend }
                
        </div>
    )
}
export default SidebarFriends