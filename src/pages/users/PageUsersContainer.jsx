import { connect } from "react-redux";
import { compose } from "redux";
import {
  getUsersThunk,
  usersChangePageThunk,
  followThunk,
  unfollowThunk,
} from "../../redux/users-reducer";
import PageUsers from "./PageUsers";
const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUsersThunk,
    usersChangePageThunk,
    followThunk,
    unfollowThunk,
  })
)(PageUsers);
