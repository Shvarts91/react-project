import { usersApiPage } from '../api/api.js'
import { updateObjectInArray } from '../utils/object-helpers.js'
import { setErrorMessage } from './app-reducer'
const UNFOLLOW = 'UNFOLLOW'
const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CARRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 5,
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProgress: [],
}

const usersReduсer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
        }),
      }
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalItemsCount: action.count }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter((id) => id !== action.userId),
      }
    }
    default:
      return state
  }
}

export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
})

export const followSuccess = (userId) => ({
  type: FOLLOW,
  userId,
})

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
})

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})

export const setTotalUsersCount = (totalItemsCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalItemsCount,
})

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
})

export const requestUsersThunkCreator = (page, pageSize) => async (
  dispatch
) => {
  dispatch(toggleIsFetching(true))
  let data = await usersApiPage.getUsers(page, pageSize)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId))
  let data = await apiMethod(userId)

  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
  dispatch(setErrorMessage(data.messages[0] || ''))
}

export const follow = (userId) => async (dispatch) => {
  let data = await usersApiPage.followUser.bind(userId)
  let actionCreator = followSuccess
  followUnfollowFlow(dispatch, userId, data, actionCreator)
}

export const unfollow = (userId) => async (dispatch) => {
  let data = await usersApiPage.unfollowUser.bind(userId)

  let actionCreator = unfollowSuccess
  followUnfollowFlow(dispatch, userId, data, actionCreator)
}

export default usersReduсer
