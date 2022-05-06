import React from 'react';
import styles from './LeftMenu.module.scss'
import { Link } from 'react-router-dom';
const LeftMenu = () => {
    return (
        <div className="gridItemLeftblock">
                <div className={styles.leftMenu}>
                    <nav>
                        <ul>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/messages">Messages</Link></li>
                            <li>News</li>
                            <li>Music</li>
                            <li>Settings</li>
                        </ul>
                    </nav>
                </div>
        </div>
    )
}
export default LeftMenu