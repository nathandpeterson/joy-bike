import { LOAD_BIKES, ADD_EBIKE } from '../actions'

export function EbikesReducer(state= {}, action){
    switch (action.type) {
        case LOAD_BIKES:
            return action.ebikes
        case ADD_EBIKE:
            return action.request
        default:
            return state
    }
}