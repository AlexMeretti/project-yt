import React, { Suspense, useEffect } from "react";
import "./Index.scss";
import { Routes, Route } from "react-router-dom";
import LoginContainer from "./pages/login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Fetching from "./components/common/fetching/Fething";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import UsersPage from "./pages/users/UsersPage";
import PageProfile from "./pages/profile/PageProfile";
const PageMessagesContainer = React.lazy(() =>
  import("./pages/messages/PageMessagesContainer")
);

const App = ({ initializeApp, initialized }) => {
  useEffect(() => {
    initializeApp();
  }, [initializeApp]);
  if (!initialized) {
    return <Fetching />;
  } else
    return (
      <div className="gridContainer">
        <Header />
        <div className="gridItemSidebar">{<Sidebar />}</div>
        <div className="gridItemContent">
          <Routes>
            <Route path="/" element={<LoginContainer />}></Route>
            <Route path="/profile/" element={<PageProfile />}></Route>
            <Route path="/profile/:id" element={<PageProfile />}></Route>
            <Route
              path="/messages/*"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <PageMessagesContainer />
                </Suspense>
              }
            ></Route>
            <Route path="/users/" element={<UsersPage />}></Route>
          </Routes>
        </div>
      </div>
    );
};
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose(connect(mapStateToProps, { initializeApp }))(App);
