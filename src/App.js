import React from "react";
import PageProfile from "./pages/profile/PageProfile";
import Header from "./components/header/Header";
import "./Index.scss";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import PageMessages from "./pages/messages/PageMessages";

const App = (props) => {
  return (
    <div className="gridContainer">
      <Header />
      <div className="gridItemSidebar">
        <Sidebar sidebar={props.store.getState().sidebar} />
      </div>
      <div className="gridItemContent">
        <Routes>
          <Route
            path="/profile"
            element={
              <PageProfile store={props.store} dispatch={props.dispatch} />
            }
          ></Route>
          <Route
            path="/messages/*"
            element={
              <PageMessages store={props.store} dispatch={props.dispatch} />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
};
export default App;
