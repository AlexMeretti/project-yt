import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import {
  setUserProfile,
  getProfileThunk,
  getProfileStatusThunk,
  setProfileStatus,
  setAvatar,
  setProfileData,
  profileEditModeToggle,
} from "../../redux/profile-reducer";
import {
  getAuth,
  getProfilePage,
} from "../../redux/selectors/profile-selector";
import UserProfile from "./UserProfile";
import withRouter from "./WithRouter";
class UserProfileContainer extends React.Component {
  renderProfile() {
    let userId = this.props.router.params.id;
    if (!userId) {
      userId = this.props.auth.id;
      if (!userId) {
      }
    }
    this.props.getProfileThunk(userId);
    this.props.getProfileStatusThunk(userId);
  }
  componentDidMount() {
    if (this.props.router.params.id || this.props.auth.id) {
      this.renderProfile();
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.router.params.id !== prevProps.router.params.id) {
      this.renderProfile();
    }
  }

  render() {
    if (!this.props.router.params.id && !this.props.auth.id) {
      return <Navigate replace to="/" />;
    }
    return <UserProfile {...this.props} owner={!this.props.router.params.id} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profilePage: getProfilePage(state),
    auth: getAuth(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfileThunk,
    getProfileStatusThunk,
    setProfileStatus,
    setAvatar,
    setProfileData,
    profileEditModeToggle,
  }),
  withRouter
)(UserProfileContainer);
