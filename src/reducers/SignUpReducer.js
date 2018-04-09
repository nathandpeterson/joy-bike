import { SIGN_UP } from '../actions'

export function SignUpReducer(state={}, action){
  switch (action.type) {
    case SIGN_UP:
      return action.signup  
    default:
      return state
  }
}