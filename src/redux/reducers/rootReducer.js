import {combineReducers} from 'redux'
import postsReducer from './postsReducer'
import personReducer from './personReducer'


const rootReducer  = combineReducers({
posts: postsReducer,
person: personReducer,
    })
export default rootReducer