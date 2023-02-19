import React from 'react'
import s from './ProfileInfo.module.css'
//import s from './../FormsControls/FormsControls.module.css'
import { ElemForm } from '../../FormsControls/FormsControls'
import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux/es/exports'
import { saveProfile } from '../../../redux/profile-reducer'
import * as Yup from 'yup'
import { string } from 'yup'

const ProfileDataForm = ({ props, outEditMode }) => {
  const { contacts, photos, userId, ...fields } = props.profile
  const dispatch = useDispatch()
  return (
    <div className={s.aboutMeBlockForm}>
      <Formik
        initialValues={{ ...contacts, ...fields }}
        onSubmit={async (values) => {
          const {
            aboutMe,
            lookingForAJob,
            lookingForAJobDescription,
            fullName,
            ...contacts
          } = values
          await dispatch(
            saveProfile({
              aboutMe,
              lookingForAJob,
              lookingForAJobDescription,
              fullName,
              contacts,
              userId,
              photos,
            })
          )

          outEditMode()
        }}
        validationSchema={Yup.object().shape({
          fullName: string().required(),
          facebook: string()
            .url()
            .nullable(),
          website: string()
            .url()
            .nullable(),
          vk: string()
            .url()
            .nullable(),
          twitter: string()
            .url()
            .nullable(),
          instagram: string()
            .url()
            .nullable(),
          youtube: string()
            .url()
            .nullable(),
          github: string()
            .url()
            .nullable(),
          mainLink: string()
            .url()
            .nullable(),
        })}
      >
        {(form) => {
          return (
            <Form>
              <div>
                <button type="submit">Save</button>
              </div>
              <div>
                <label>
                  <b>Full name:</b>
                  <Field
                    component={ElemForm}
                    name="fullName"
                    placeholder={'fullName'}
                    type={'input'}
                    typeField="input"
                  />
                </label>
              </div>

              <div>
                <label>
                  <b>Looking for a job:</b>
                  <Field
                    component={ElemForm}
                    name="lookingForAJob"
                    placeholder={'lookingForAJob'}
                    type={'checkbox'}
                    typeField="input"
                  />
                </label>
              </div>
              <div>
                <label>
                  <b>My professional skills:</b>
                  <Field
                    component={ElemForm}
                    name="lookingForAJobDescription"
                    placeholder={'lookingForAJobDescription'}
                    type={'input'}
                    typeField="input"
                  />
                </label>
              </div>

              <div>
                <label>
                  <b>About me:</b>
                  <Field
                    component={ElemForm}
                    name="aboutMe"
                    placeholder={'aboutMe'}
                    type={'input'}
                    typeField="textarea"
                  />
                </label>
              </div>
              <div>
                <b>Contacts:</b>
                {Object.keys(props.profile.contacts).map((key) => {
                  return (
                    <div key={key}>
                      <label>
                        <b>{key}:</b>
                        <Field
                          component={ElemForm}
                          name={key}
                          placeholder={key}
                          type={'input'}
                          typeField="input"
                        />
                      </label>
                    </div>
                  )
                })}
              </div>
              {/* <div>
                <label>
                  <b>Facebook:</b>
                  <Field
                    component={ElemForm}
                    name="facebook"
                    placeholder={''}
                    type={'input'}
                    typeField="input"
                  />
                </label>
              </div>
              <div>
                <label>
                  <b>Website:</b>
                  <Field
                    component={ElemForm}
                    name="website"
                    placeholder={''}
                    type={'input'}
                    typeField="input"
                  />
                </label>
              </div>
              <div>
                <label>
                  <b>VK:</b>
                  <Field
                    component={ElemForm}
                    name="vk"
                    placeholder={''}
                    type={'input'}
                    typeField="input"
                  />
                </label>
              </div>
              <div>
                <label>
                  <b>Twitter:</b>
                  <Field
                    component={ElemForm}
                    name="twitter"
                    placeholder={''}
                    type={'input'}
                    typeField="input"
                  />
                </label>
              </div>
              <div>
                <label>
                  <b>Instagram:</b>
                  <Field
                    component={ElemForm}
                    name="instagram"
                    placeholder={''}
                    type={'input'}
                    typeField="input"
                  />
                </label>
              </div>
              <div>
                <label>
                  <b>Youtube:</b>
                  <Field
                    component={ElemForm}
                    name="youtube"
                    placeholder={''}
                    type={'input'}
                    typeField="input"
                  />
                </label>
              </div>
              <div>
                <label>
                  <b>Github:</b>
                  <Field
                    component={ElemForm}
                    name="github"
                    placeholder={''}
                    type={'input'}
                    typeField="input"
                  />
                </label>
              </div>
              <div>
                <label>
                  <b>MainLink:</b>
                  <Field
                    component={ElemForm}
                    name="mainLink"
                    placeholder={''}
                    type={'input'}
                    typeField="input"
                  />
                </label>
              </div> */}
            </Form>
          )
        }}
      </Formik>
      {/* <div>
        <button>Save</button>
      </div>
      <div>
        <b>Full name:</b> <ElemForm />
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
        <b>Contacts:</b>{' '}
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact contactTitle={key} contactValue={props.profile[key]} />
          )
        })}
      </div> */}
    </div>
  )
}

export default ProfileDataForm
