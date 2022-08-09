import { Field } from "redux-form";

import FormControls from "../../../components/common/formControls/FormControls";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validator";
import styles from "./LoginForm.module.scss";

const maxLength30 = maxLengthCreator(30);
const input = FormControls("input");
const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <div>
        <label htmlFor="firstName">Email</label>
        <Field
          name="email"
          component={input}
          type="email"
          validate={[required, maxLength30]}
          placeholder="email"
        />
      </div>
      <div>
        <label htmlFor="passsword">Password</label>
        <Field
          name="password"
          component={input}
          type="password"
          validate={[required, maxLength30]}
          placeholder="password"
        />
      </div>
      <div>
        <label htmlFor="email">Remember me</label>
        <Field name="rememberMe" component="input" type="checkbox" />
      </div>
      <div className={styles.error}>{props.error}</div>
      {props.captcha && (
        <div className={styles.captcha}>
          <img src={props.captcha} alt="captcha" />
          <Field
            name="captcha"
            component={input}
            type="text"
            placeholder="Please enter captcha"
          />
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
