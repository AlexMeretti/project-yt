 import React from 'react';
 import styles from './Header.module.scss'
 import logo from '../logo.png'
 import profileimg from '../../pages/profile/components/profile-img.jpeg'
 const Header = () => {
     return (
        <div className="gridItemHeader">
            <header className={styles.headerWrap}>
                <div className={styles.headerLogo}><img src={logo} alt='logo' /></div>
                <div className={styles.headerIcon}><img src={profileimg} alt='header-icon'/></div>
            </header>
        </div>
     )
 }
 export default Header