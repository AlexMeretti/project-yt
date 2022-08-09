import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import LoginForm from "./form/LoginForm";
import styles from "./Login.module.scss";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
const Login = (props) => {
  if (props.isAuth) {
    return <Navigate replace to="/profile" />;
  }
  const loginFormSubmit = (values) => {
    props.login(
      values.email,
      values.password,
      values.rememberMe,
      values.captcha
    );
  };
  return (
    <div className={styles.wrapper}>
      <p className={styles.heading}>Login page</p>
      <ReduxLoginForm onSubmit={loginFormSubmit} captcha={props.captcha} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
  };
};
export default connect(mapStateToProps, { login })(Login);

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);
