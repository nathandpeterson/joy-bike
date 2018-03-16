import { LOAD_BIKES } from '../actions'

export function EbikesReducer(state= {}, action){
    switch (action.type) {
        case LOAD_BIKES:
            return action.ebikes
        default:
            console.log('default in ebikes')
            return state
    }
}