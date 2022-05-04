import React from 'react';
import styles from './LeftMenu.module.scss'

const LeftMenu = () => {
    return (
        <div className="gridItemLeftblock">
                <div className={styles.leftMenu}>
                    <ul>
                        <li>Profile</li>
                        <li>Messages</li>
                        <li>News</li>
                        <li>Music</li>
                        <li>Settings</li>
                    </ul>
                </div>
        </div>
    )
}
export default LeftMenu