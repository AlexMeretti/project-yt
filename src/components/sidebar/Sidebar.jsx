import React from "react";
import { Link } from "react-router-dom";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import styles from "./Sidebar.module.scss";
const Sidebar = (props) => {
  return (
    <>
      <LeftMenu menu={props.sidebar.menu} />
      <div className={styles.developed}>
        <p>
          Developed by: <Link to="/profile/25060">Aleksandr Meretti</Link>
        </p>
      </div>
    </>
  );
};
export default Sidebar;
