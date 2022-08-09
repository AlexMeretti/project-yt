import React, { Suspense } from "react";
import "./Index.scss";
import { Routes, Route } from "react-router-dom";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import PageUsersContainer from "./pages/users/PageUsersContainer";
import UserProfileContainer from "./pages/profile/UserProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginContainer from "./pages/login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Fetching from "./components/common/fetching/Fetching";
const PageMessagesContainer = React.lazy(() =>
  import("./pages/messages/PageMessagesContainer")
);
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Fetching />;
    } else
      return (
        <div className="gridContainer">
          <HeaderContainer />
          <div className="gridItemSidebar">{<SidebarContainer />}</div>
          <div className="gridItemContent">
            <Routes>
              <Route path="/" element={<LoginContainer />}></Route>
              <Route
                path="/profile/"
                element={<UserProfileContainer />}
              ></Route>
              <Route
                path="/profile/:id"
                element={<UserProfileContainer />}
              ></Route>
              <Route
                path="/messages/*"
                element={
                  <Suspense fallback={<div>Загрузка...</div>}>
                    <PageMessagesContainer />
                  </Suspense>
                }
              ></Route>
              <Route path="/users/" element={<PageUsersContainer />}></Route>
            </Routes>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose(connect(mapStateToProps, { initializeApp }))(App);
