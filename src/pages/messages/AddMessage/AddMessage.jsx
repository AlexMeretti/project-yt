import React from "react";
import styles from "./AddMessage.module.scss";
import {
  dialogsAddMessage,
  onChangeAddMessageState,
} from "../../../redux/messagesReducer";

const AddMessage = (props) => {
  const addMessage = () => {
    props.dispatch(dialogsAddMessage());
  };
  const onChangeAddMessage = (event) => {
    const currentMessage = event.target.value;
    props.dispatch(onChangeAddMessageState(currentMessage));
  };
  return (
    <div className={styles.bottomBlock}>
      <div className={styles.leftBlock}>
        <textarea
          onChange={onChangeAddMessage}
          value={props.addMessage}
          placeholder="Enter your message"
        />
      </div>
      <div className={styles.centerBlock}>
        <button className="button1" onClick={addMessage}>
          Send
        </button>
      </div>
    </div>
  );
};
export default AddMessage;
