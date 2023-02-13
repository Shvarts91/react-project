import { profileApiPage } from '../api/api.js'
const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
  posts: [
    {
      id: 1,
      message: 'It is react',
      likesCount: 12,
    },
    {
      id: 2,
      message: 'It is Js',
      likesCount: 15,
    },
    {
      id: 3,
      message: 'It is Html',
      likesCount: 10,
    },
    {
      id: 4,
      message: 'It is CSS',
      likesCount: 20,
    },
  ],

  profile: null,
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 5, likesCount: 0, message: action.payload },
        ],
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      }
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    default:
      break
  }
  return state
}

export const addPostActionCreater = (formData) => ({
  type: ADD_POST,
  payload: formData,
})

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
})

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
})

export const profileThunkCreator = (userId) => {
  return (dispatch) => {
    profileApiPage.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data))
    })
  }
}

export const getUsersStatusThunk = (userId) => {
  return (dispatch) => {
    profileApiPage.getStatus(userId).then((data) => {
      dispatch(setStatus(data))
    })
  }
}

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    profileApiPage.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
  }
}

export default profileReducer
