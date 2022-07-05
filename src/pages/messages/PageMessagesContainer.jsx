import PageMessages from "./PageMessages";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};
const PageMessagesContainer = connect(mapStateToProps)(PageMessages);
export default PageMessagesContainer;
