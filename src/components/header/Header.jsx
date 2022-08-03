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
        {
          <div className={styles.headerIcon}>
            {props.isAuth ? (
              <AuthTrue login={props.login} logout={props.logout} />
            ) : (
              <AuthFalse />
            )}
          </div>
        }
      </header>
    </div>
  );
};
export default Header;
