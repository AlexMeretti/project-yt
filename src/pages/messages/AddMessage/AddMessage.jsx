import React from 'react';
import styles from './AddMessage.module.scss'

const AddMessage = (props) => {
    const addPostLink = React.createRef()
    const addMessage = () => {
        const text = addPostLink.current.value
        alert(text)
    }
    return (
        <div className={styles.bottomBlock}>
            <div className={styles.leftBlock}><textarea ref={addPostLink}></textarea></div>
            <div className={styles.centerBlock}><button className='button1' onClick={addMessage}>Send</button></div>
        </div>
    )
}
export default AddMessage