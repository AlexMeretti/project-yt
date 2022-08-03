import React from "react";
import "./Index.scss";
import { Routes, Route } from "react-router-dom";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import PageMessagesContainer from "./pages/messages/PageMessagesContainer";
import PageUsersContainer from "./pages/users/PageUsersContainer";
import UserProfileContainer from "./pages/profile/UserProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginContainer from "./pages/login/Login";

const App = (props) => {
  return (
    <div className="gridContainer">
      <HeaderContainer />
      <div className="gridItemSidebar">{<SidebarContainer />}</div>
      <div className="gridItemContent">
        <Routes>
          <Route path="/" element={<LoginContainer />}></Route>
          <Route path="/profile/" element={<UserProfileContainer />}></Route>
          <Route path="/profile/:id" element={<UserProfileContainer />}></Route>
          <Route path="/messages/*" element={<PageMessagesContainer />}></Route>
          <Route path="/users/" element={<PageUsersContainer />}></Route>
        </Routes>
      </div>
    </div>
  );
};
export default App;
