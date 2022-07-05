import React from "react";
import PageProfile from "./pages/profile/PageProfile";
import Header from "./components/header/Header";
import "./Index.scss";
import { Routes, Route } from "react-router-dom";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import PageMessagesContainer from "./pages/messages/PageMessagesContainer";

const App = (props) => {
  return (
    <div className="gridContainer">
      <Header />
      <div className="gridItemSidebar">{<SidebarContainer />}</div>
      <div className="gridItemContent">
        <Routes>
          <Route path="/profile" element={<PageProfile />}></Route>
          <Route path="/messages/*" element={<PageMessagesContainer />}></Route>
        </Routes>
      </div>
    </div>
  );
};
export default App;
