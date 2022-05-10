import React from 'react';
import AddMessage from './AddMessage/AddMessage';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import styles from './PageMessages.module.scss'

const PageMessages = (props) => {
    const elementDialogs = props.data.friends.map(el => <DialogItem  id={el.id} key={el.id} name={el.name} photo={el.photo}/> );
    const elementMessages = props.data.messages.map( el => <MessageItem message={el.message} key={el.id} />);
    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogs}>
                { elementDialogs }
            </div>
            <div className={styles.messages}>
                { elementMessages }
            <div className={styles.bottomBlock}>
                <AddMessage />
            </div>
            </div>
        </div>
    )
}
export default PageMessages