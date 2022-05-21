import React from 'react';
import AddMessage from './AddMessage/AddMessage';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import styles from './PageMessages.module.scss'

const PageMessages = (props) => {
    const elementDialogs = props.messagespage.friends.map(el => <DialogItem  id={el.id} key={el.id} name={el.name} photo={el.photo}/> );
    const elementMessages = props.messagespage.messages.map( el => <MessageItem message={el.message} key={el.id} />);
    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogs}>
                { elementDialogs }
            </div>
            <div className={styles.messages}>
                { elementMessages }
            <div className={styles.bottomBlock}>
                <AddMessage dialogsAddMessage={props.dialogsAddMessage} dispatch={props.dispatch}/>
            </div>
            </div>
        </div>
    )
}
export default PageMessages