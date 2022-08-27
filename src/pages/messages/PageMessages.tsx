import { MessagesInitialStateType } from "../../redux/messages-reducer";
import AddMessage from "./AddMessage/AddMessage";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
//@ts-ignore
import styles from "./PageMessages.module.scss";

type propsTypes = {
  messagesPage: MessagesInitialStateType
}
const PageMessages = (props: propsTypes) => {
  const elementDialogs = props.messagesPage.friends.map((el) => (
    <DialogItem id={el.id} key={el.id} name={el.name} photo={el.photo} />
  ));
  const elementMessages = props.messagesPage.messages.map((el) => (
    <MessageItem message={el.message} key={el.id} id={el.id}/>
  ));
  return (
    <div className={styles.wrapper}>
      <h3>coming soon</h3>
      <div className={styles.dialogs}>{elementDialogs}</div>
      <div className={styles.messages}>
        {elementMessages}
        <div className={styles.bottomBlock}>
          <AddMessage />
        </div>
      </div>
    </div>
  );
};
export default PageMessages;
