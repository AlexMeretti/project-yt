import { Formik } from "formik";
import { useSelector } from "react-redux";
import { login } from "../../../redux/auth-reducer";
import { useTypedThunkDispatch } from "../../../redux/redux-store";
import { getCaptcha } from "../../../redux/selectors/auth-selector";

import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const dispatch = useTypedThunkDispatch();
  const captcha = useSelector(getCaptcha);
  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: true }}
      onSubmit={(values, { setSubmitting }) => {
        const { email, password, rememberMe, captcha } = values;
        dispatch(login(email, password, rememberMe, captcha));
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className={styles.LoginForm}>
          <div>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
          </div>
          <div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
          </div>
          <div>
            <label>
              <input type="checkbox" name="rememberMe" />
              Remember me
            </label>
          </div>
          {captcha ? (
            <div>
              <div>
                <img src={captcha} alt="captcha" />
              </div>
              <input
                placeholder="Please enter captcha"
                type="text"
                name="captcha"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          ) : null}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
