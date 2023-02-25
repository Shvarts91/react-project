import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user-img.png'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'

const User = ({ user, followingProgress, unfollow, follow }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              className={s.userPhoto}
              alt=""
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <Button
              variant="outlined"
              disabled={followingProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id)
              }}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              variant="outlined"
              disabled={followingProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id)
              }}
            >
              Follow
            </Button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div> {'user.location.country'} </div>
          <div> {'user.location.city'} </div>
        </span>
      </span>
    </div>
  )
}

export default User
