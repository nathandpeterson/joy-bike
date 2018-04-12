import { ebikes } from '../data/fixtures'
import axios from 'axios'

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

export function signUp(data, cb){
    const formattedData = {...data}
    delete formattedData.email
    const request = axios.post(`http://localhost:5000/user/${data.email}`, formattedData)

    return (dispatch) => {
        request.then(response => {
            cb()
        dispatch({ type: SIGN_UP, 
                    payload: response.data })
        })
    }
}
