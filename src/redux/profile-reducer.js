import { profileApiPage } from '../api/api.js'
const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET-STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

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
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } }
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

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
})

export const profileThunkCreator = (userId) => async (dispatch) => {
  let data = await profileApiPage.getProfile(userId)
  dispatch(setUserProfile(data))
}

export const getUsersStatusThunk = (userId) => async (dispatch) => {
  let data = await profileApiPage.getStatus(userId)
  dispatch(setStatus(data))
}

export const updateStatusThunk = (status) => async (dispatch) => {
  let data = await profileApiPage.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhotoThunk = (file) => async (dispatch) => {
  let data = await profileApiPage.savePhoto(file)
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos))
  }
}
export default profileReducer
