import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Textarea, TextareaField } from "../../FormsControls/FormsControls";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let onAddPost = (data) => {
    props.addPost(data.addPost);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>

      <AddPostForm addPost={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddPostForm = (props) => {
  return (
    <Formik
      initialValues={{
        addPost: "",
      }}
      onSubmit={(values, action) => {
        props.addPost(values);
        action.resetForm();
      }}
      validationSchema={Yup.object({
        addPost: Yup.string()
          .max(5, "Must be 5 characters or less")
          .required("Required"),
      })}
    >
      {(props) => {
        return (
          /*<form onSubmit={props.handleSubmit}>
            <Textarea
              name="addPost"
              inputProps={{ placeholder: 'Enter post' }}
              {...props}
            />

            <div>
              <button type="submit">Add post</button>
            </div>
          </form>*/
          <Form>
            <Field name="addPost" component={TextareaField} />
            <div>
              <button type="submit">Add post</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default MyPosts;
