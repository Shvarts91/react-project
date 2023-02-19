import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path = '/messages/' + props.id
  return (
    <div className={s.dialog}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiTTq70tFP6pkvJIbaX8TVUUVfYjA049osQ&usqp=CAU" alt="" />
      <NavLink
        className={(navData) => (navData.isActive ? s.active : s.item)}
        to={path}
      >
        {props.name}
      </NavLink>
    </div>
  )
}

export default DialogItem
