import React from 'react'
import './App.css'
import NavbarContainer from './components/Navbar/NavbarContainer'
import { Route, Routes, useNavigate } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import { connect } from 'react-redux'
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux'
import { Error } from "./components/common/Error/Error";

export const withNavigate = (Component) => {
  let RedirectTo = (props) => {
    return <Component {...props} navigate={useNavigate()} />
  }
  return RedirectTo
}

class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert('Some error')
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener(
      'unhandledrejection',
      this.catchAllUnhandledErrors
    )
  }

  render() {
    // if (!this.props.initialized) {
    //   return <Preloder />
    // }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/login/*" element={<Login />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/profile/:userId/" element={<ProfileContainer />} />
            <Route path="/messages/*" element={<DialogsContainer />} />
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="*" element={<div>404 NOT FOUND</div>} />
          </Routes>
        </div>
        <Error />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  connect(
    mapStateToProps,
    { initializeApp }
  )(App)
)
