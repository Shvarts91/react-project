import React from 'react'
import s from './ProfileInfo.module.css'
import { useDispatch } from 'react-redux/es/exports'
import { saveProfile } from '../../../redux/profile-reducer'
import { string } from 'yup'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Checkbox } from '@mui/material'
import { FormGroup } from '@mui/material'
import { FormControlLabel } from '@mui/material'

// import * as Yup from 'yup'
//import s from './../FormsControls/FormsControls.module.css'
// import { ElemForm } from '../../FormsControls/FormsControls'
// import { Field, Form, Formik } from 'formik'

// const ProfileDataForm = ({ props, outEditMode }) => {
//   const { contacts, photos, userId, ...fields } = props.profile
//   const dispatch = useDispatch()
//   return (
//     <div className={s.aboutMeBlockForm}>
//       <Formik
//         initialValues={{ ...contacts, ...fields }}
//         onSubmit={async (values) => {
//           const {
//             aboutMe,
//             lookingForAJob,
//             lookingForAJobDescription,
//             fullName,
//             ...contacts
//           } = values
//           await dispatch(
//             saveProfile({
//               aboutMe,
//               lookingForAJob,
//               lookingForAJobDescription,
//               fullName,
//               contacts,
//               userId,
//               photos,
//             })
//           )

//           outEditMode()
//         }}
//         validationSchema={Yup.object().shape({
//           fullName: string().required(),
//           facebook: string()
//             .url()
//             .nullable(),
//           website: string()
//             .url()
//             .nullable(),
//           vk: string()
//             .url()
//             .nullable(),
//           twitter: string()
//             .url()
//             .nullable(),
//           instagram: string()
//             .url()
//             .nullable(),
//           youtube: string()
//             .url()
//             .nullable(),
//           github: string()
//             .url()
//             .nullable(),
//           mainLink: string()
//             .url()
//             .nullable(),
//         })}
//       >
//         {(form) => {
//           return (
//             <Form>
//               <div>
//                 <label>
//                   <b>Full name:</b>
//                   <Field
//                     component={ElemForm}
//                     name="fullName"
//                     placeholder={'fullName'}
//                     type={'input'}
//                     typeField="input"
//                   />
//                 </label>
//               </div>

//               <div>
//                 <label>
//                   <b>Looking for a job:</b>
//                   <Field
//                     component={ElemForm}
//                     name="lookingForAJob"
//                     placeholder={'lookingForAJob'}
//                     type={'checkbox'}
//                     typeField="input"
//                   />
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   <b>My professional skills:</b>
//                   <Field
//                     component={ElemForm}
//                     name="lookingForAJobDescription"
//                     placeholder={'lookingForAJobDescription'}
//                     type={'input'}
//                     typeField="input"
//                   />
//                 </label>
//               </div>

//               <div>
//                 <label>
//                   <b>About me:</b>
//                   <Field
//                     component={ElemForm}
//                     name="aboutMe"
//                     placeholder={'aboutMe'}
//                     type={'input'}
//                     typeField="textarea"
//                   />
//                 </label>
//               </div>
//               <div>
//                 <b>Contacts:</b>
//                 {Object.keys(props.profile.contacts).map((key) => {
//                   return (
//                     <div key={key}>
//                       <label>
//                         <b>{key}:</b>
//                         <Field
//                           component={ElemForm}
//                           name={key}
//                           placeholder={key}
//                           type={'input'}
//                           typeField="input"
//                         />
//                       </label>
//                     </div>
//                   )
//                 })}
//               </div>
//               <div>
//                 <Button type="submit" variant="outlined">
//                   Save
//                 </Button>
//               </div>
//             </Form>
//           )
//         }}
//       </Formik>
//     </div>
//   )
// }

const validationSchema = yup.object({
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
})

const ProfileDataForm = ({ props, outEditMode }) => {
  const { contacts, photos, userId, ...fields } = props.profile
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: { ...contacts, ...fields },
    validationSchema: validationSchema,
    onSubmit: async (values, action) => {
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
    },
  })

  return (
    <div>
      <form className={s.aboutMeBlockForm} onSubmit={formik.handleSubmit}>
        {/* <div>
          <TextField
            label="About Me"
            id="aboutMe"
            name="aboutMe"
            multiline
            fullWidth
            value={formik.values.aboutMe}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.aboutMe && Boolean(formik.errors.addPost)}
            helperText={formik.touched.aboutMe && formik.errors.addPost}
            size="small"
          />
        </div> */}

        <div>
          {myFields.map(({ label, name }) => (
            <div>
              <TextField
                sx={{ mb: 2 }}
                label={label}
                name={name}
                fullWidth
                multiline
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                helperText={formik.touched[name] && formik.errors[name]}
                size="small"
              />
            </div>
          ))}
        </div>

        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.lookingForAJobDescription}
                  onChange={formik.handleChange}
                />
              }
              label="Looking For A Job"
              name="lookingForAJob"
            />
          </FormGroup>
          <TextField
            sx={{ mb: 2 }}
            label="My professional skills:"
            id="lookingForAJobDescription"
            name="lookingForAJobDescription"
            multiline
            rows={2}
            fullWidth
            value={formik.values.lookingForAJobDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.lookingForAJobDescription &&
              Boolean(formik.errors.addPlookingForAJobDescriptionost)
            }
            helperText={
              formik.touched.lookingForAJobDescription &&
              formik.errors.lookingForAJobDescription
            }
            size="small"
          />
        </div>
        <div className={s.titleContacts}>
          <b>Contacts:</b>
        </div>
        <div className={s.contacts}>
          {myContacts.map(({ label, name }) => (
            <div>
              <TextField
                sx={{ mb: 2 }}
                label={label}
                name={name}
                fullWidth
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                helperText={formik.touched[name] && formik.errors[name]}
                size="small"
              />
            </div>
          ))}
        </div>

        <div>
          <Button type="submit" variant="outlined">
            Save
          </Button>
        </div>
      </form>
    </div>
  )
}

const myFields = [
  {
    name: 'fullName',
    label: 'Full Name',
  },
  {
    name: 'aboutMe',
    label: 'About me:',
  },
  // {
  //   name: 'lookingForAJob',
  //   label: 'Looking for a job:',
  // },
]

const myContacts = [
  {
    name: 'facebook',
    label: 'Facebook:',
  },
  {
    name: 'website',
    label: 'Website:',
  },
  {
    name: 'vk',
    label: 'Vk:',
  },
  {
    name: 'twitter',
    label: 'Twitter:',
  },
  {
    name: 'instagram',
    label: 'Instagram:',
  },
  {
    name: 'youtube',
    label: 'Youtube:',
  },
  {
    name: 'github',
    label: 'Github:',
  },
  {
    name: 'mainLink',
    label: 'Main Link:',
  },
]
export default ProfileDataForm
