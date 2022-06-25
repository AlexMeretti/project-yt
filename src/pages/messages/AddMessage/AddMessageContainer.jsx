import { addMessage, addMessageChange } from "../../../redux/messages-reducer";
import AddMessage from "./AddMessage";

const AddMessageContainer = (props) => {
  let state = props.store.getState().messagesPage;
  const onAddMessage = () => {
    props.dispatch(addMessage());
  };
  const onAddMessageChange = (currentText) => {
    props.dispatch(addMessageChange(currentText));
  };
  return (
    <AddMessage
      onAddMessage={onAddMessage}
      onAddMessageChange={onAddMessageChange}
      addMessageCurrentText={state.addMessageCurrentText}
    />
  );
};
export default AddMessageContainer;
