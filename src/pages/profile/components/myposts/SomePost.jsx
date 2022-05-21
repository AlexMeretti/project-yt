import React from 'react';
import styles from './SomePost.module.scss'
import avatar from '../UserProfile/profile-img.jpeg'

const SomePost = (props) => {
    return (
        <div className={styles.block}>
            <div className={styles.avatar}><img src={avatar} alt='avatar'/></div>
            <div className={styles.content}>
                <p className={styles.author}>{props.id}{props.author}</p>
                <p className={styles.text}>{props.message}</p>
                <p>Likes: {props.likes}</p>
            </div>
        </div>
    )
}
export default SomePost