import React from 'react';
import styles from './SomePost.module.scss'
import postphoto from '../profile-img.jpeg'

const SomePost = (props) => {
    
    return (
        <div className={styles.block}>
            <div className={styles.avatar}><img src={postphoto} alt='avatar'/></div>
            <div className={styles.content}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.text}>{props.message}</p>
            </div>
        </div>
    )
}
export default SomePost