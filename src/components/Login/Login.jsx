import React from 'react'

import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { useNavigate } from 'react-router-dom'
import s from './../FormsControls/FormsControls.module.css'
import { compose } from 'redux'
import { withRouter } from '../../hoc/withRouter'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Checkbox } from '@mui/material'
import { FormGroup } from '@mui/material'
import { FormControlLabel } from '@mui/material'

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

const LoginForm = (props) => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
      captcha: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      const response = await props.login(
        values.email,
        values.password,
        values.rememberMe,
        values.captcha
      )
      if (response.messages.length) {
        return actions.setErrors({ validationError: response.messages[0] })
      }
      navigate('/profile')
    },
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            size="small"
          />
        </div>

        <div>
          <TextField
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            size="small"
          />
        </div>
        <div>
          <span />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.rememberMe}
                  onChange={formik.handleChange}
                />
              }
              onChange={formik.handleChange}
              name="rememberMe"
            />
          </FormGroup>
        </div>
        <div>
          {props.captchaUrl && <img src={props.captchaUrl} alt="" />}
          {props.captchaUrl && (
            <div>
              <TextField
                name="captcha"
                label="Captcha"
                value={formik.values.captcha}
                onChange={formik.handleChange}
                error={formik.touched.captcha && Boolean(formik.errors.captcha)}
                helperText={formik.touched.captcha && formik.errors.captcha}
                size="small"
              />
            </div>
          )}
        </div>
        <div>
          {formik.errors.validationError && (
            <div className={s.formError}>{formik.errors.validationError}</div>
          )}
        </div>
        <div>
          <Button color="primary" variant="contained" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  )
}

const Login = (props) => {
  console.log(props.error)
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm captchaUrl={props.captchaUrl} login={props.login} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
  error: state.app.error,
})

export default compose(
  connect(
    mapStateToProps,
    { login }
  ),
  withRouter
)(Login)
