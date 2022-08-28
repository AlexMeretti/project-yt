import { useSelector } from "react-redux";
import LoginForm from "./form/LoginForm";
//@ts-ignore
import styles from "./Login.module.scss";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../../redux/selectors/auth-selector";


const Login: React.FC = () => {
  const isAuth = useSelector(getIsAuth)
  if (isAuth) {
    return <Navigate replace to="/profile" />;
  }
  
  return (
    <div className={styles.wrapper}>
      <p className={styles.heading}>Login page</p>
      <LoginForm />
    </div>
  );
};

export default Login