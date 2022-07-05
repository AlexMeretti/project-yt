import { connect } from "react-redux";
import { addMessage, addMessageChange } from "../../../redux/messages-reducer";
import AddMessage from "./AddMessage";

const mapStateToProps = (state) => {
  return {
    addMessageCurrentText: state.messagesPage.addMessageCurrentText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: () => {
      dispatch(addMessage());
    },
    onAddMessageChange: (currentText) => {
      dispatch(addMessageChange(currentText));
    },
  };
};

const AddMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMessage);
export default AddMessageContainer;
