import { Button } from "antd";
import { Formik } from "formik";
import { Checkbox, Input, Form } from "formik-antd";
import { useSelector } from "react-redux";
import { login } from "../../redux/reducers/auth-reducer";
import { useTypedThunkDispatch } from "../../redux/redux-store";
import { getCaptcha } from "../../redux/selectors/auth-selector";

const LoginForm = () => {
  const dispatch = useTypedThunkDispatch();
  const captcha = useSelector(getCaptcha);
  console.log(captcha);
  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: true }}
      onSubmit={(values) => {
        const { email, password, rememberMe, captcha } = values;
        dispatch(login(email, password, rememberMe, captcha));
      }}
    >
      <Form className="formLogin">
        <Input name="email" placeholder="email" />
        <Input name="password" type="password" placeholder="password" />
        <Checkbox name="rememberMe">Remember me?</Checkbox>
        {captcha ? (
          <div className="captcha">
            <img src={captcha} alt="captcha" />
            <Input placeholder="Please enter captcha" name="captcha" />
          </div>
        ) : null}
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
