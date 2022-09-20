import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../../redux/selectors/auth-selector";


const LoginPage: React.FC = () => {
  const isAuth = useSelector(getIsAuth)
  if (isAuth) {
    return <Navigate replace to="/profile" />;
  }
  
  return (
    <div className='loginPage'>
      <h1>Login page</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage