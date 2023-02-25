import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

import * as Yup from 'yup'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ))

  let messageElements = props.dialogsPage.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ))

  const onAddMessage = (data) => {
    props.addMessage(data.enterMessage)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        {messageElements}
        <AddMessageForm addMessage={onAddMessage} />
      </div>
    </div>
  )
}

// const AddMessageForm = (props) => {
//   return (
//     <Formik
//       initialValues={{
//         enterMessage: '',
//       }}
//       onSubmit={(values, action) => {
//         props.addMessage(values)
//         action.resetForm()
//       }}
//       validationSchema={Yup.object({
//         enterMessage: Yup.string()
//           .max(5, 'Must be 5 characters or less')
//           .required('Required'),
//       })}
//     >
//       {(form) => {
//         return (
//           <Form>
//             <Field
//               placeholder="Enter your message"
//               name="enterMessage"
//               component={ElemForm}
//               typeField={'textarea'}
//             />

//             <div>
//               <button type="submit">Add message</button>
//             </div>
//           </Form>
//         )
//       }}
//     </Formik>
//   )
// }

const validationSchema = yup.object({
  enterMessage: Yup.string()
    .max(5, 'Must be 5 characters or less')
    .required('Required'),
})

const AddMessageForm = (props) => {
  const formik = useFormik({
    initialValues: {
      enterMessage: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      props.addMessage(values)
      action.resetForm()
    },
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={s.inputAddPost}>
          <TextField
            label="Enter your message"
            name="enterMessage"
            multiline
            rows={2}
            value={formik.values.enterMessage}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.enterMessage && Boolean(formik.errors.enterMessage)
            }
            helperText={
              formik.touched.enterMessage && formik.errors.enterMessage
            }
          />
        </div>
        <div>
          <Button color="primary" variant="contained" type="submit">
            Add Message
          </Button>
        </div>
      </form>
    </div>
  )
}
export default Dialogs
