import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import LoginForm from "./form/LoginForm";
import styles from "./Login.module.scss";
import { login } from "../../redux/auth-reducer";
const Login = (props) => {
  const loginFormSubmit = (values) => {
    props.login(values.email, values.password, values.rememberMe);
  };
  return (
    <div className={styles.wrapper}>
      <h1>Login page</h1>
      <ReduxLoginForm onSubmit={loginFormSubmit} />
    </div>
  );
};
export default connect(null, { login })(Login);

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);
