import React from 'react';
import styles from '../PageProfile.module.scss'
import profileimg from './profile-img.jpeg'

const ContentProfile = () => {
    return (
                <div className={styles.profile}>
                    <div className={styles.photo}>
                        <img alt='img' src={profileimg} />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>Aleksandr Meretti</div>
                            <ul>
                                <li>Date: <span>28 february 1997</span></li>
                                <li>City: <span>Moscow</span></li>
                                <li>Education: <span>BGPK</span></li>
                                <li>Website: <span>Meretti.group</span></li>
                            </ul>
                    </div>
                </div>
    )
}
export default ContentProfile