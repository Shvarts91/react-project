import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import s from './Header.module.css'
import { Button } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'

const Header = (props) => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    props.logout()
    navigate('login')
  }

  return (
    <AppBar position="fixed">
      <Toolbar className={s.header}>
        <div>
          <img
            src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
            alt=""
          />
        </div>

        <div className={s.loginBlock}>
          {props.isAuth ? (
            <div className={s.loginBlockFlex}>
              <span className={s.loginNik}>{props.login} - </span>
              <Button
                color="secondary"
                onClick={handleLogOut}
                variant="outlined"
              >
                Log Out
              </Button>
            </div>
          ) : (
            <NavLink to={'/login'}>Login</NavLink>
          )}
        </div>
      </Toolbar>
    </AppBar>

    // <header className={s.header}>
    //   <img
    //     src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
    //     alt=""
    //   />
    //   <div className={s.loginBlock}>
    //     {props.isAuth ? (
    //       <div className={s.loginBlockFlex}>
    //         <span className={s.loginNik}>{props.login} - </span>
    //         <Button onClick={handleLogOut} variant="outlined">
    //           Log Out
    //         </Button>

    //       </div>
    //     ) : (
    //       <NavLink to={'/login'}>Login</NavLink>
    //     )}
    //   </div>
    // </header>
  )
}

export default Header
