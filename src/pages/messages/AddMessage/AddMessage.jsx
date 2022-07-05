import styles from "./AddMessage.module.scss";

const AddMessage = (props) => {
  console.log(props);
  const addMessage = () => {
    props.onAddMessage();
  };
  const onChangeAddMessage = (event) => {
    props.onAddMessageChange(event.target.value);
  };
  return (
    <div className={styles.bottomBlock}>
      <div className={styles.leftBlock}>
        <textarea
          onChange={onChangeAddMessage}
          value={props.addMessageCurrentText}
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
