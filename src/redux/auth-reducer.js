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

export const getAuthUserData = () => async (dispatch) => {
  let data = await authApi.authData()

  if (data.resultCode === 0) {
    let { id, email, login } = data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await authApi.login(email, password, rememberMe)

  if (data.resultCode === 0) {
    dispatch(getAuthUserData())
  }
  return data
}

export const logout = () => async (dispatch) => {
  let data = await authApi.logout()
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer
