import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions"

const sessionReducer = (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.state.id[currentUser.id]
      return newState
    case LOGOUT_CURRENT_USER:
      newState.state.id[currentUser.id] = null
      return newState    
    default: 
      return state
  }
}

export default sessionReducer