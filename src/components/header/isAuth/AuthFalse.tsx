import { Link } from "react-router-dom";
//@ts-ignore
import styles from "./AuthFalse.module.scss";
const AuthFalse = () => {
  return (
    <div className={styles.login}>
      <Link to="/">login</Link>
    </div>
  );
};

export default AuthFalse;
