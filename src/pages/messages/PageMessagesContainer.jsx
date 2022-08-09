import PageMessages from "./PageMessages";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};
export default connect(mapStateToProps)(PageMessages);
