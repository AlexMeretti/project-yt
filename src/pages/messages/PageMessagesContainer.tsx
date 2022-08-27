import PageMessages from "./PageMessages";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
const mapStateToProps = (state: AppStateType) => {
  return {
    messagesPage: state.messagesPage,
  };
};
export default connect(mapStateToProps)(PageMessages);
