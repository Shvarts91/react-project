import React from 'react'
import { Field, Form, Formik } from 'formik'
import { ElemForm, InputField } from '../FormsControls/FormsControls'
import * as Yup from 'yup'

const LoginForm = (props) => {
  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
        remember: false,
      }}
      onSubmit={(values) => {
        console.log(values)
      }}
      validationSchema={Yup.object({
        login: Yup.string().required('Required'),
        password: Yup.string()
          .min(5, 'Must be min 5 characters')
          .required('Required'),
        remember: Yup.string().required('Required'),
      })}
    >
      {(form) => {
        return (
          <Form>
            <div>
              <Field
                component={ElemForm}
                name="login"
                placeholder={'Login'}
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
                name="remember"
                type={'checkbox'}
                typeField="input"
                required
              />{' '}
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

const Login = () => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm />
    </div>
  )
}

export default Login
