import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import authReducer from './auth-reducer'
import dialogsReducer from './dialogs-reducer'
import navbarReducer from './navbar-reducer'
import profileReducer from './profile-reducer'
import usersReduсer from './users-reducer'
import thunkMiddleware from 'redux-thunk'
import appReducer from './app-reducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReduсer,
  auth: authReducer,
  app: appReducer,
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
