import { connect } from "react-redux";
import Header from "./Header";
import React from "react";

import {
  setAuthDataUser,
  getAuthDataThunk,
  logout,
} from "../../redux/auth-reducer";
import { compose } from "redux";
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthDataThunk();
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default compose(
  connect(mapStateToProps, { setAuthDataUser, getAuthDataThunk, logout })
)(HeaderContainer);
