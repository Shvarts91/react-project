import React from 'react'

import s from './FormsControls.module.css'

// export const Textarea = (props) => {
//   const hasError = props.touched[props.name] && props.errors[props.name]
//   return (
//     <div className={s.formControl + '' + hasError ? s.error : ''}>
//       {props.label && <label htmlFor={props.name}>{props.label}</label>}
//       <textarea
//         id={props.name}
//         name={props.name}
//         onChange={props.handleChange}
//         onBlur={props.handleBlur}
//         value={props.values[props.name]}
//         {...props.inputProps}
//       />
//       {hasError ? (
//         <div className={s.error}>{props.errors[props.name]}</div>
//       ) : null}
//     </div>
//   )

//   // <div className={s.formControl + '' + hasError ? s.error : ''}>
//   //   <div>
//   //     <textarea {...props} />
//   //   </div>
//   //   <div className={s.error}>
//   //     <ErrorMessage />
//   //   </div>
//   // </div>
//   //)
// }

export const TextareaField = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const hasError = touched[field.name] && errors[field.name]

  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <textarea {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className={s.error}>{errors[field.name]}</div>
      )}
    </div>
  )
}

export const InputField = ({ field, form: { touched, errors }, type, ...props }) => {
  const hasError = touched[field.name] && errors[field.name]

  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      {type === 'textarea' ?  <textarea {...field} {...props} /> : <input {...field} {...props} />}
      {touched[field.name] && errors[field.name] && (
        <div className={s.error}>{errors[field.name]}</div>
      )}
    </div>
  )
}
