import { connect } from "react-redux";
import { compose } from "redux";
import {
  followThunk,
  unfollowThunk,
  getCurrentUsers,
} from "../../redux/users-reducer";
import PageUsers from "./PageUsers";
const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    followThunk,
    unfollowThunk,
    getCurrentUsers,
  })
)(PageUsers);
