import { FastField, Form, Formik, FormikValues } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/CustomField/InputField/index";
import { PathRoute } from "../../constants/router/path";
import { ButtonHTMLTypes } from "../../interfaces";
import { actions } from "../../redux/Actions";
import { GetAuthSelector } from "../../redux/Selectors";

const Login = () => {
  //! define
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogged } = GetAuthSelector();  

  //! state

  //! function
  //   if (isLogin) {
  //   }

  const handleSubmit = (values: FormikValues) => {
    const { username, password } = values;
    dispatch({
      type: actions.LOGIN,
      payload: {
        username,
        password,
      },
    });
  };
  //! useEffect
  useEffect(() => {
    dispatch({ type: actions.CHECK_AUTH, payload: {} });
  }, []);

  useEffect(() => {
    if (isLogged) {
      navigate(PathRoute.Home);
    }
  }, [isLogged]);

  //! render
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      {(propFormik) => {
        return (
          <Form>
            <div>username: anhdt && password: anhdt</div>
            <div>
              <label htmlFor="username">Username</label>
              <FastField component={InputField} name="username" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <FastField
                component={InputField}
                name="password"
                type="password"
              />
            </div>
            <Button title="Đăng nhập" htmlType={ButtonHTMLTypes.Submit} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
