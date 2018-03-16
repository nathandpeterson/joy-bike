import { combineReducers } from 'redux'
import { SelectedReducer } from './SelectedReducer'
import { EbikesReducer } from './EbikesReducer'


export default combineReducers({
    ebikes: EbikesReducer,
    selectedBike: SelectedReducer
})

