import { connect } from "react-redux";
import Header from "./Header";
import React from "react";

import { logout } from "../../redux/auth-reducer";
import { compose } from "redux";
class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.auth.authProfile,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
  };
};
export default compose(connect(mapStateToProps, { logout }))(HeaderContainer);
