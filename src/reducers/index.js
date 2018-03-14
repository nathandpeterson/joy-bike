import { SET_BIKE } from '../actions'

export default function reducer(state= {}, action){
    switch (action.type) {
        case SET_BIKE:
            return action.stack    
        default:
            return state
    }
}