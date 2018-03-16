export const SET_BIKE = 'SET_BIKE'
export const LOAD_BIKES = 'LOAD_BIKES'

export function setBike(bike){
    return {
        type: SET_BIKE,
        action: bike
    }
}

export function loadBikes(bikes){
    return {
        type: LOAD_BIKES,
        action: bikes
    }
}
