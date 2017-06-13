import base from '../data/base'

function user (state = {}, action) {
  switch (action.type) {
    case 'LOGIN':
      const user = action.user
      if (user) {
        return {
          userName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid
        }
      }
      return {}
    case 'LOGOUT':
      base.unauth()
      return state
    default:
      return state
  }
}

export default user
