import { ebikes } from '../data/fixtures'

export const SET_SELECTED_BIKE = 'SET_SELECTED_BIKE'
export const LOAD_BIKES = 'LOAD_BIKES'


export function setSelectedBike(selectedBike){
    console.log(selectedBike)
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
