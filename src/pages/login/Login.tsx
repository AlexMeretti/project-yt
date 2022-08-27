import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import LoginForm from "./form/LoginForm";
//@ts-ignore
import styles from "./Login.module.scss";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";
type loginFormSubmitTypes = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}
type PropsTypes = {
  captcha: string | null
  isAuth: boolean
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => 
void }

const Login: React.FC<PropsTypes> = (props) => {
  if (props.isAuth) {
    return <Navigate replace to="/profile" />;
  }
  const loginFormSubmit = ({email, password, rememberMe, captcha}: loginFormSubmitTypes) => {
    props.login(
      email,
      password,
      rememberMe,
      captcha
    );
  };
  return (
    <div className={styles.wrapper}>
      <p className={styles.heading}>Login page</p>
      <ReduxLoginForm //@ts-ignore 
      onSubmit={loginFormSubmit} captcha={props.captcha} />
    </div>
  );
};
const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
  };
};
export default connect(mapStateToProps, { login })(Login);

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);
