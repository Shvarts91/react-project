import Users from './Users'
import { connect } from 'react-redux'
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsersThunkCreator,
} from '../../redux/users-reducer'
import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux'
import { withRouter } from '../../hoc/withRouter'
import {
  getCurrentPage,
  getFollowingProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from '../../redux/users-selectors'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    )
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.requestUsersThunkCreator(pageNumber, this.props.pageSize)
  }

  render() {
    // console.log('RENDER')
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalItemsCount={this.props.totalItemsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingProgress={this.props.followingProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  //console.log('mapStateToProps USERS')
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
  }
}
/*
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    },
  }
}
*/
export default compose(
  connect(
    mapStateToProps,
    {
      follow,
      unfollow,
      setCurrentPage,
      toggleFollowingProgress,
      requestUsersThunkCreator,
    }
  ),
  withRouter
)(UsersContainer)
