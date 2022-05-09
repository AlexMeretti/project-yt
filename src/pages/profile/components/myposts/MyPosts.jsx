import React from 'react';
import styles from './MyPosts.module.scss'
import SomePost from './SomePost';

const MyPosts = (props) => {
    const elementPosts = props.posts.map(el => <SomePost author={el.author} message={el.message}/>)
    return(
        <div className={styles.block}>
            <div className={styles.heading}>My Posts</div>
            <div className={styles.someposts}>
                { elementPosts }
            </div>
        </div>
    )
}
export default MyPosts