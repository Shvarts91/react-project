import dialogsReducer from './dialogs-reducer'
import navbarReducer from './navbar-reducer'
import profileReducer from './profile-reducer'

let store = {
  _state: {
    profilePage: {
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
      newPostText: 'it-kamasutra.com',
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: 'Dimych',
        },
        {
          id: 2,
          name: 'Andrey',
        },
        {
          id: 3,
          name: 'Sveta',
        },
        {
          id: 4,
          name: 'Sasha',
        },
        {
          id: 5,
          name: 'Viktor',
        },
        {
          id: 6,
          name: 'Valera',
        },
      ],
      messages: [
        {
          id: 1,
          message: 'Hi',
        },
        {
          id: 2,
          message: 'How is your react?',
        },
        {
          id: 3,
          message: 'Yo',
        },
        {
          id: 4,
          message: 'Yo',
        },
        {
          id: 5,
          message: 'Yo',
        },
      ],
      newMessageText: '',
    },
    navbar: {
      pages: [
        {
          id: 1,
          namePage: 'Profile',
        },
        {
          id: 2,
          namePage: 'Messages',
        },
        {
          id: 3,
          namePage: 'News',
        },
        {
          id: 4,
          namePage: 'Music',
        },
        {
          id: 5,
          namePage: 'Settings',
        },
        {
          id: 6,
          namePage: 'Friends',
        },
      ],
    },
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state
  },
  subscribe(observe) {
    this._callSubscriber = observe
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.navbar = navbarReducer(this._state.navbar, action)
    this._callSubscriber(this._state)
  },
}

export default store
