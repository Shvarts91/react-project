import React from 'react'
import s from './Users.module.css'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

const Users = ({
  currentPage,
  totalItemsCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div className={s.pageUsers}>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingProgress={props.followingProgress}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  )
}

export default Users
