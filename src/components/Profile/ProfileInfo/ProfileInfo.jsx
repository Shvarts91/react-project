import React from 'react'
import Preloder from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user-img.png'
import { useState } from 'react'
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false)
  if (!props.profile) {
    return <Preloder />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return (
    <div className={s.descriptionBlock}>
      <div className={s.photoStatusBlock}>
        <img src={props.profile.photos.large || userPhoto} />
        {props.isOwner && (
          <input type={'file'} onChange={onMainPhotoSelected} />
        )}
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
      {editMode ? (
        <ProfileDataForm
          outEditMode={() => {
            setEditMode(false)
          }}
          props={props}
        />
      ) : (
        <ProfileData
          goToEditMode={() => {
            setEditMode(true)
          }}
          props={props}
          isOwner={props.isOwner}
        />
      )}
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}:</b> {contactValue}
    </div>
  )
}

const ProfileData = ({ props, isOwner, goToEditMode }) => {
  return (
    <div className={s.aboutMeBlock}>
      <div>{isOwner && <button onClick={goToEditMode}>Edit</button>}</div>
      <div>
        <b>Full name:</b> {props.profile.fullName}
      </div>
      <div>
        <b>Looking for a job: </b> {props.profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {props.profile.lookingForAJob && (
        <div>
          <b>My professional skills:</b>
          {props.profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me:</b> {props.profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(props.profile.contacts).map((key) => {
          if (props.profile.contacts[key]) {
            return (
              <Contact
                contactTitle={key}
                contactValue={props.profile.contacts[key]}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default ProfileInfo
