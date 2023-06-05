import { combineReducers } from 'redux';
import islamicReducer from './islamic/islamicReducer';


const rootReducer = combineReducers({
  islamic: islamicReducer,
})

export default rootReducer