import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  let pageElements = props.pageElements.map((page) => (
    <div className={s.item} key={page.namePage}>
      <NavLink
        to={page.namePage.toLowerCase()}
        className={(navData) => (navData.isActive ? s.active : s.item)}
      >
        {page.namePage}
      </NavLink>
    </div>
  ))

  return <nav className={s.nav}>{pageElements}</nav>
}

export default Navbar
