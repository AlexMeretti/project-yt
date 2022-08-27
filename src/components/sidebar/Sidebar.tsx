import React from "react";
import { Link } from "react-router-dom";
import LeftMenu from "./components/LeftMenu/LeftMenu";
//@ts-ignore
import styles from "./Sidebar.module.scss";
const Sidebar = () => {
  return (
    <>
      <LeftMenu />
      <div className={styles.developed}>
        <p>
          Developed by: <Link to="/profile/25060">Aleksandr Meretti</Link>
        </p>
      </div>
    </>
  );
};
export default Sidebar;
