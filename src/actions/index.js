import { ebikes } from '../data/fixtures'

export const SET_BIKE = 'SET_BIKE'
export const LOAD_BIKES = 'LOAD_BIKES'


export function setBike(ebike){
    return {
        type: SET_BIKE,
        action: ebike
    }
}

export function loadBikes(state){
    return {
        type: LOAD_BIKES,
        ebikes
    }
}
