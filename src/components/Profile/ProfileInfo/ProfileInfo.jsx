import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user-img.png'
import { useState } from 'react'
import ProfileDataForm from './ProfileDataForm'
import Button from '@mui/material/Button'

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false)
  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return (
    <div className={s.descriptionBlock}>
      <div>
        <div className={s.photoBlock}>
          <img src={props.profile.photos.large || userPhoto} alt="" />
          {props.isOwner && (
            <div className={s.buttonPhoto}>
              <input type={'file'} onChange={onMainPhotoSelected} />
            </div>
          )}
        </div>

        <div className={s.status}>
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>

      <div className={s.aboutMeBlock}>
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
      <div className={s.aboutMeBlockTop}>
        <div>
          <b>Full name:</b> {props.profile.fullName}
        </div>
        <div>
          <b>Looking for a job: </b>{' '}
          {props.profile.lookingForAJob ? 'yes' : 'no'}
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
      </div>

      <div>
        <span className={s.titleContacts}>
          <b>Contacts:</b>
        </span>
        <div className={s.contacts}>
          {Object.keys(props.profile.contacts).map((key) => {
            if (props.profile.contacts[key]) {
              return (
                <Contact
                  key={key}
                  contactTitle={key}
                  contactValue={props.profile.contacts[key]}
                />
              )
            }
            return null
          })}
        </div>
      </div>
      <div className={s.aboutMeBlockButton}>
        {isOwner && (
          <Button onClick={goToEditMode} variant="outlined">
            Edit
          </Button>
        )
        // <button onClick={goToEditMode}>Edit</button>
        }
      </div>
    </div>
  )
}

export default ProfileInfo
