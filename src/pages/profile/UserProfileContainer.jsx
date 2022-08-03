import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  setUserProfile,
  getProfileThunk,
  getProfileStatusThunk,
  setProfileStatus,
} from "../../redux/profile-reducer";
import UserProfile from "./UserProfile";
import withRouter from "./WithRouter";
class UserProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.id;
    if (userId) {
      this.props.getProfileThunk(userId);
      this.props.getProfileStatusThunk(userId);
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.auth.isAuth !== prevProps.auth.isAuth) {
      let userId = this.props.auth.id;
      this.props.getProfileThunk(userId);
      this.props.getProfileStatusThunk(userId);
    }
  }
  render() {
    return <UserProfile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    auth: state.auth,
  };
};

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfileThunk,
    getProfileStatusThunk,
    setProfileStatus,
  }),
  withRouter
)(UserProfileContainer);
