import React from 'react';
import styles from './MyPosts.module.scss'
import SomePost from './SomePost';

const MyPosts = (props) => {
    const elementPosts = props.posts.map(el => <SomePost author={el.author} message={el.message} key={el.id}/>)

    const addPostLink = React.createRef()
    const addPost = () => {
        const text = addPostLink.current.value
        alert(text)

    }
    return(
        <div className={styles.block}>
            <div className={styles.heading}>My Posts</div>
            <div className={styles.postAdd}>
                <div className={styles.blockTextArea}><textarea ref={addPostLink}></textarea></div>
                <div className={styles.blockButton}><button className='button1' onClick={ addPost }>Add Message</button></div>
            </div>
            <div className={styles.someposts}>
                { elementPosts }
            </div>
        </div>
    )
}
export default MyPosts