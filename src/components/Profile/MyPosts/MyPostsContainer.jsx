import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from '../../../redux/profile-reducer.js'

import MyPosts from './MyPosts.jsx'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (formData) => {
      dispatch(addPostActionCreater(formData))
    },
  }
}

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts)

export default MyPostsContainer
