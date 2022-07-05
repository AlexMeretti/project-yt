import React from "react";
import AddMessageContainer from "./AddMessage/AddMessageContainer";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import styles from "./PageMessages.module.scss";

const PageMessages = (props) => {
  const elementDialogs = props.messagesPage.friends.map((el) => (
    <DialogItem id={el.id} key={el.id} name={el.name} photo={el.photo} />
  ));
  const elementMessages = props.messagesPage.messages.map((el) => (
    <MessageItem message={el.message} key={el.id} />
  ));
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogs}>{elementDialogs}</div>
      <div className={styles.messages}>
        {elementMessages}
        <div className={styles.bottomBlock}>
          <AddMessageContainer />
        </div>
      </div>
    </div>
  );
};
export default PageMessages;
