import { combineReducers } from 'redux'
import { SelectedReducer } from './SelectedReducer'
import { EbikesReducer } from './EbikesReducer'
import { SignUpReducer } from './SignUpReducer'
import { reducer as formReducer} from 'redux-form'


export default combineReducers({
    ebikes: EbikesReducer,
    selectedBike: SelectedReducer,
    addEbike: EbikesReducer,
    form: formReducer
})

