import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { TextareaField } from '../FormsControls/FormsControls'

const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ))

  let messageElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
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

const AddMessageForm = (props) => {
  return (
    <Formik
      initialValues={{
        enterMessage: '',
      }}
      onSubmit={(values, action) => {
        props.addMessage(values)
        action.resetForm()
      }}
      validationSchema={Yup.object({
        enterMessage: Yup.string()
          .max(5, 'Must be 5 characters or less')
          .required('Required'),
      })}
    >
      {(form) => {
        return (
          <Form>
            <Field
              placeholder="Enter your message"
              name="enterMessage"
              component={TextareaField}
            />

            <div>
              <button type="submit">Add message</button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
export default Dialogs
