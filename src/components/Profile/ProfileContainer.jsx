import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
  profileThunkCreator,
  getUsersStatusThunk,
  updateStatusThunk,
} from '../../redux/profile-reducer'

import { compose } from 'redux'

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.profileThunkCreator(userId)
    this.props.getUsersStatusThunk(userId)
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatusThunk}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})

export default compose(
  connect(
    mapStateToProps,
    { profileThunkCreator, getUsersStatusThunk, updateStatusThunk }
  ),
  withRouter
  //withAuthRedirect
)(ProfileContainer)
