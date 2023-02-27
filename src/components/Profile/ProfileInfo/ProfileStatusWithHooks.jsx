import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import s from './ProfileInfo.module.css'
import CreateIcon from '@mui/icons-material/Create'

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(
    () => {
      setStatus(props.status)
    },
    [props.status]
  )

  const activateEditMode = () => {
    props.authorizedUserId === props.profileUserId
      ? setEditMode(true)
      : setEditMode(false)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.authorizedUserId === props.profileUserId && props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editMode && (
        <div>
          <span className={s.myStatus} onClick={activateEditMode}>
            {props.status || 'No Status'}
            {props.authorizedUserId === props.profileUserId && <CreateIcon />}
          </span>
        </div>
      )}
      {editMode && (
        <div className={s.myStatus}>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            type="text"
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  )
}

export default ProfileStatusWithHooks
