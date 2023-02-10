import React from "react";
import { Field, Form, Formik } from "formik";
import { ElemForm } from "../FormsControls/FormsControls";
import * as Yup from "yup";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { useNavigate } from "react-router-dom";
import s from "./../FormsControls/FormsControls.module.css";
import { compose } from "redux";
import { withRouter } from "../../hoc/withRouter";

const LoginForm = props => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        rememberMe: false
      }}
      onSubmit={async (values, actions) => {
        const response = await props.login(
          values.email,
          values.password,
          values.rememberMe
        );
        if (response.messages.length) {
          return actions.setErrors({ validationError: response.messages[0] });
        }
        navigate("/profile");
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Required"),
        password: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required")
      })}
    >
      {form => {
        return (
          <Form>
            <div>
              <Field
                component={ElemForm}
                name="email"
                placeholder={"Email"}
                type={"input"}
                typeField="input"
              />
            </div>
            <div>
              <Field
                component={ElemForm}
                type={"password"}
                name="password"
                placeholder={"Password"}
                typeField="input"
              />
            </div>
            <div>
              <Field
                component={ElemForm}
                name="rememberMe"
                type={"checkbox"}
                typeField="input"
              />
              remember me
            </div>
            {form.errors.validationError && (
              <div className={s.formError}>{form.errors.validationError}</div>
            )}

            <div>
              <button
                // onClick={() => {
                //  form.resetForm()
                // }}
                type="submit"
              >
                Login
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const Login = props => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm login={props.login} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default compose(
  connect(
    mapStateToProps,
    { login }
  ),
  withRouter
)(Login);
