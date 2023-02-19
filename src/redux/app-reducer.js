import { getAuthUserData } from "./auth-reducer.js";
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

let initialState = {
  initialized: false,
  error: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return { ...state, initialized: true };
    }
    case SET_ERROR_MESSAGE:
      return  { ...state, error: action.payload }

    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS
});

export const initializeApp = () => {
  return dispatch => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export const setErrorMessage = (payload) => ({
  type: SET_ERROR_MESSAGE,
  payload,
})

export default appReducer;
