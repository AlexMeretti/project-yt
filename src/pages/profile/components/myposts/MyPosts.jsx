import React from 'react';
import styles from './MyPosts.module.scss'
import SomePost from './SomePost';

const MyPosts = () => {
    return(
        <div className={styles.block}>
            <div className={styles.heading}>Мои посты</div>

            <div className={styles.someposts}>
                <SomePost name='Alex' message='Modi quidem tenetur dolorum eaque numquam cumque cum.'/>
                <SomePost name='Petya' message='Quidem cum aperiam corrupti id neque quis!'/>
            </div>
        </div>
    )
}
export default MyPosts