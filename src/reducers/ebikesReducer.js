import { SET_BIKE, LOAD_BIKES } from '../actions'

export function ebikesReducer(state= {}, action){
    switch (action.type) {
        case SET_BIKE:
            return action.ebike
        case LOAD_BIKES:
            return action.ebikes
        default:
            return state
    }
}