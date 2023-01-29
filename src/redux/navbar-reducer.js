let initialState = {
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
      namePage: 'Users',
    },
    {
      id: 6,
      namePage: 'Settings',
    },
  ],
}

const navbarReducer = (state = initialState, action) => {
  return state
}

export default navbarReducer
