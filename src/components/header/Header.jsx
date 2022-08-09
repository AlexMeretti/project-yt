import React from "react";
import styles from "./Header.module.scss";
import logo from "../logo.png";
import AuthTrue from "./isAuth/AuthTrue";
import AuthFalse from "./isAuth/AuthFalse";
const Header = (props) => {
  return (
    <div className="gridItemHeader">
      <header className={styles.headerWrap}>
        <div className={styles.headerLogo}>
          <img src={logo} alt="logo" />
        </div>
        {props.isAuth ? (
          <AuthTrue
            login={props.login}
            logout={props.logout}
            profile={props.profile}
          />
        ) : (
          <AuthFalse />
        )}
      </header>
    </div>
  );
};
export default Header;
