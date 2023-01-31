import React from 'react'
import { Field, Form, Formik } from 'formik'
import { ElemForm } from '../FormsControls/FormsControls'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { redirect } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = (props) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
        isValidating: true,
      }}
      onSubmit={(values) => {
        props.login(values.email, values.password, values.rememberMe)
      }}
      validationSchema={Yup.object({
        email: Yup.string().required('Required'),
        password: Yup.string()
          .min(5, 'Must be min 5 characters')
          .required('Required'),
        rememberMe: Yup.string().required('Required'),
      })}
    >
      {(form) => {
        return (
          <Form>
            <div>
              <Field
                component={ElemForm}
                name="email"
                placeholder={'Email'}
                type={'input'}
                typeField="input"
              />
            </div>
            <div>
              <Field
                component={ElemForm}
                type={'password'}
                name="password"
                placeholder={'Password'}
                typeField="input"
              />
            </div>
            <div>
              <Field
                component={ElemForm}
                name="rememberMe"
                type={'checkbox'}
                typeField="input"
              />
              remember me
            </div>
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
        )
      }}
    </Formik>
  )
}

const Login = (props) => {
  const navigate = useNavigate()
  useEffect(
    () => {
      if (props.isAuth) {
        navigate('/profile')
      }
    },
    [props.isAuth]
  )

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm login={props.login} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(
  mapStateToProps,
  { login }
)(Login)
