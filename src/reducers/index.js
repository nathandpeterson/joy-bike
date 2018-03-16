import { SET_BIKE, LOAD_BIKES } from '../actions'

export default function reducer(state= {}, action){
    switch (action.type) {
        case SET_BIKE:
            return action.bike
        case LOAD_BIKES:
            return action.bikes  
        default:
            return state
    }
}