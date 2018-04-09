import { ebikes } from '../data/fixtures'

export const SET_SELECTED_BIKE = 'SET_SELECTED_BIKE'
export const LOAD_BIKES = 'LOAD_BIKES'
export const SIGN_UP = 'SIGN_UP'

export function setSelectedBike(selectedBike){
    return {
        type: SET_SELECTED_BIKE,
        selectedBike
    }
}

export function loadBikes(){
    // Data is coming from fixtures, but I will load it from API here
    return {
        type: LOAD_BIKES,
        ebikes
    }
}

export function signUp(data){
    return {
        type: SIGN_UP,
        data
    }
}
