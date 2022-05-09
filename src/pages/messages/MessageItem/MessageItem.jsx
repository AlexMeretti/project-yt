import React from 'react';
import styles from './MessageItem.module.scss'

const MessageItem = (props) => {
    return (
        <div className={styles.messages}>
                <p>{props.message}</p>
            </div>
    )
}
export default MessageItem