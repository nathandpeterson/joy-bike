import { combineReducers } from 'redux'
import { ebikesReducer } from './ebikesReducer'


const rootReducer = combineReducers({
    ebikes: ebikesReducer
})

export default rootReducer
