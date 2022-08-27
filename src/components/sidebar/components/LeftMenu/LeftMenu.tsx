import React from "react";
import { useSelector } from "react-redux";
import { getSidebarMenu } from "../../../../redux/selectors/sidebar-selectors";
import ElementMenu from "./ElementMenu";
//@ts-ignore
import styles from "./LeftMenu.module.scss";

const LeftMenu = () => {
  const menu = useSelector(getSidebarMenu);
  const elementMenu = menu.map((el) => <ElementMenu key={el.id} {...el} />);
  return (
    <div className={styles.leftMenu}>
      <nav>
        <ul>{elementMenu}</ul>
      </nav>
    </div>
  );
};
export default LeftMenu;
