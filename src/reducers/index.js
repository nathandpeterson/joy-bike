import { combineReducers } from 'redux'
import { SelectedReducer } from './SelectedReducer'
import { EbikesReducer } from './EbikesReducer'
import { SignUpReducer } from './SignUpReducer'


export default combineReducers({
    ebikes: EbikesReducer,
    selectedBike: SelectedReducer,
    signup: SignUpReducer
})

