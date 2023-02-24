import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
//import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
//import { ElemForm } from '../../FormsControls/FormsControls'
import TextField from '@mui/material/TextField'

import Button from '@mui/material/Button'

import { useFormik } from 'formik'
import * as yup from 'yup'

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ))

  let onAddPost = (data) => {
    props.addPost(data.addPost)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>

      <AddPostForm addPost={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

// const AddPostForm = (props) => {
//   return (
//     <Formik
//       initialValues={{
//         addPost: '',
//       }}
//       onSubmit={(values, action) => {
//         props.addPost(values)
//         action.resetForm()
//       }}
//       validationSchema={Yup.object({
//         addPost: Yup.string()
//           .max(5, 'Must be 5 characters or less')
//           .required('Required'),
//       })}
//     >
//       {(props) => {
//         return (
//           <Form>
//             <Field name="addPost" component={ElemForm} typeField={'textarea'} />
//             <div>
//               <Button type="submit" variant="contained">
//                 Add post
//               </Button>
//               {/* <button type="submit">Add post</button> */}
//             </div>
//           </Form>
//         )
//       }}
//     </Formik>
//   )
// }

const validationSchema = yup.object({
  addPost: Yup.string()
    .max(5, 'Must be 5 characters or less')
    .required('Required'),
})

const AddPostForm = (props) => {
  const formik = useFormik({
    initialValues: {
      addPost: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      props.addPost(values)
      action.resetForm()
    },
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={s.inputAddPost}>
          <TextField
            label="Post"
            id="addPost"
            name="addPost"
            multiline
            rows={3}
            fullWidth
            value={formik.values.addPost}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.addPost && Boolean(formik.errors.addPost)}
            helperText={formik.touched.addPost && formik.errors.addPost}
          />
        </div>
        <div>
          <Button color="primary" variant="contained" type="submit">
            Add Post
          </Button>
        </div>
      </form>
    </div>
  )
}

export default MyPosts
