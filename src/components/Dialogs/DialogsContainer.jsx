import { addMessageActionCreater } from '../../redux/dialogs-reducer.js'
import Dialogs from './Dialogs.jsx'
import { connect } from 'react-redux'

import { withAuthRedirect } from '../../hoc/withAuthRedirect.js'
import { compose } from 'redux'
import {withRouter} from "../../hoc/withRouter";
/*
const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState()

        let addMessage = () => {
          store.dispatch(addMessageActionCreater())
        }

        let onMessageChange = (e) => {
          let text = e.target.value
          let action = updateNewMessageTextActionCreater(text)
          store.dispatch(action)
        }

        return (
          <Dialogs
            onMessageChange={onMessageChange}
            addMessage={addMessage}
            newMessageText={state.dialogsPage.newMessageText}
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}
*/
let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    //dialogs: state.dialogsPage.dialogs,
    //messages: state.dialogsPage.messages,
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
