import React from "react";
import AddMessageContainer from "./AddMessage/AddMessageContainer";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import styles from "./PageMessages.module.scss";

const PageMessages = (props) => {
  let state = props.store.getState().messagesPage;
  const elementDialogs = state.friends.map((el) => (
    <DialogItem id={el.id} key={el.id} name={el.name} photo={el.photo} />
  ));
  const elementMessages = state.messages.map((el) => (
    <MessageItem message={el.message} key={el.id} />
  ));
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogs}>{elementDialogs}</div>
      <div className={styles.messages}>
        {elementMessages}
        <div className={styles.bottomBlock}>
          <AddMessageContainer store={props.store} dispatch={props.dispatch} />
        </div>
      </div>
    </div>
  );
};
export default PageMessages;
