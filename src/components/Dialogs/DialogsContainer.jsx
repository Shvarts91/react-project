import { addMessageActionCreater } from '../../redux/dialogs-reducer.js'
import Dialogs from './Dialogs.jsx'
import { connect } from 'react-redux'

import { withAuthRedirect } from '../../hoc/withAuthRedirect.js'
import { compose } from 'redux'
import { withRouter } from '../../hoc/withRouter'

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (formData) => {
      dispatch(addMessageActionCreater(formData))
    },
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter,
  withAuthRedirect
)(Dialogs)
