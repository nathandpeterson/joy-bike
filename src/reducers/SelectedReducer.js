import { SET_SELECTED_BIKE } from '../actions'

export function SelectedReducer(state= {}, action){
    switch (action.type) {
        case SET_SELECTED_BIKE:
            return action.selectedBike
        default:
            return state
    }
}