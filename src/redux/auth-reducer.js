import { authApi } from '../api/api.js'
const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.payload }
    }

    default:
      return state
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
})

export const getAuthUserData = () => {
  return (dispatch) => {
    return authApi.authData().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data
        dispatch(setAuthUserData(id, email, login, true))
      }
    })
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    return authApi.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData())
      }
      return data
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    authApi.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
  }
}

export default authReducer
