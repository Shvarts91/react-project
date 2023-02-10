import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  profileThunkCreator,
  getUsersStatusThunk,
  updateStatusThunk
} from "../../redux/profile-reducer";
import { compose } from "redux";
import { withRouter } from "../../hoc/withRouter";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { authorizedUserId, router, isAuth } = this.props;
    if (!isAuth) return;
    if (router.params.userId) {
      this.getProfileData(router.params.userId);
      return;
    }
    this.getProfileData(authorizedUserId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { userId } = this.props.router.params;
    const { isAuth } = this.props;

    if (userId && prevProps.isAuth !== isAuth) {
      return this.getProfileData(this.props.router.params.userId);
    }

    if (
      (prevProps.isAuth !== isAuth && !userId) ||
      (userId !== prevProps.router.params.userId && this.props.authorizedUserId)
    ) {
      this.getProfileData(this.props.authorizedUserId);
    }
  }

  getProfileData = id => {
    this.props.profileThunkCreator(id);
    this.props.getUsersStatusThunk(id);
  };

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
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(
    mapStateToProps,
    { profileThunkCreator, getUsersStatusThunk, updateStatusThunk }
  ),
  withRouter
)(ProfileContainer);
