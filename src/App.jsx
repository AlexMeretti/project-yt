import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Fetching from "./components/common/fetching/Fething";
import Header from "./components/header/SocialHeader";
import UsersPage from "./pages/users/UsersPage";
import PageProfile from "./pages/profile/PageProfile";
import { getInitialized } from "./redux/selectors/app-selector";
import { initializeApp } from "./redux/reducers/app-reducer";
import { useTypedThunkDispatch } from "./redux/redux-store";
import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import SocialHeader from "./components/header/SocialHeader";
import "./styles/styles.scss";
import Dialog from "./pages/messages/Dialog";
import SocialFooter from "./components/footer/SocialFooter";
import LoginPage from "./pages/login/LoginPage";
const MessagesPage = React.lazy(() => import("./pages/messages/MessagesPage"));

const App = () => {
  const initialized = useSelector(getInitialized);
  const dispatch = useTypedThunkDispatch();
  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);
  if (!initialized) {
    return <Fetching />;
  } else
    return (
      <>
        <Layout className="layout">
          <Header>
            <SocialHeader />
          </Header>

          <Content className="content">
            <Routes>
              <Route path="/" element={<LoginPage />}></Route>
              <Route path="/profile/" element={<PageProfile />}></Route>
              <Route path="/profile/:id" element={<PageProfile />}></Route>
              <Route
                path="/messages/"
                element={
                  <Suspense fallback={<div>Загрузка...</div>}>
                    <MessagesPage />
                  </Suspense>
                }
              ></Route>
              <Route path="/messages/:id" element={<Dialog />}></Route>
              <Route path="/users/" element={<UsersPage />}></Route>
            </Routes>
          </Content>
          <Footer className="componentsFooter">
            <SocialFooter />
          </Footer>
        </Layout>
      </>
    );
};
export default App;
