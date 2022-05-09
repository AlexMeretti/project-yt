import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import styles from './PageMessages.module.scss'

const PageMessages = (props) => {
    
    const elementDialogs = props.data.dialogs.map(el => <DialogItem  id={el.id} name={el.name}/> );
    const elementMessages = props.data.messages.map( el => <MessageItem message={el.message} />);
    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogs}>
                { elementDialogs }
            </div>
            <div className={styles.messages}>
                { elementMessages }
            </div>
        </div>
    )
}
export default PageMessages