import profileReducer, { addPostActionCreater } from './profile-reducer'

it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreater('it-kamasutra')
  let state = {
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
  }
  // 2. action
  let newState = profileReducer(state, action)

  // 3. expection
  expect(newState.posts.length).toBe(5)
})
