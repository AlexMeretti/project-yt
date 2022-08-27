//@ts-ignore
import styles from "./Header.module.scss";
//@ts-ignore
import logo from "../../assets/logo.png";
import AuthTrue from "./isAuth/AuthTrue";
import AuthFalse from "./isAuth/AuthFalse";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../redux/selectors/auth-selector";
const Header = () => {
  const isAuth = useSelector(getIsAuth);
  return (
    <div className="gridItemHeader">
      <header className={styles.headerWrap}>
        <div className={styles.headerLogo}>
          <img src={logo} alt="logo" />
        </div>
        {isAuth ? <AuthTrue /> : <AuthFalse />}
      </header>
    </div>
  );
};
export default Header;
