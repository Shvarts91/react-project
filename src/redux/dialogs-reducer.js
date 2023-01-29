const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,

        messages: [...state.messages, { id: 6, message: action.payload }],
      }

    default:
      return state
  }
}

export const addMessageActionCreater = (formData) => ({
  type: ADD_MESSAGE,
  payload: formData,
})

export default dialogsReducer
