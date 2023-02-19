import { authApi, securityApi } from "../api/api.js";
import {setErrorMessage} from "./app-reducer";
const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, captchaUrl: null, ...action.payload };
    }
    case GET_CAPTCHA_URL_SUCCESS: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth }
});

export const getCaptchaUrlSuccess = captchaUrl => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl }
});

export const getAuthUserData = () => async dispatch => {
  let data = await authApi.authData();

  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (
  email,
  password,
  rememberMe,
  captcha,
  error,
) => async dispatch => {
  const data = await authApi.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else if (data.resultCode === 10) {
    dispatch(getCaptchaUrl());
  }

  dispatch(setErrorMessage(data.messages[0] || ''));
  return data;
};

export const logout = () => async dispatch => {
  const data = await authApi.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
  dispatch(setErrorMessage(data.messages[0] || ''));
};

export const getCaptchaUrl = () => async dispatch => {
  const data = await securityApi.getCaptchaUrl();
  const captchaUrl = data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
