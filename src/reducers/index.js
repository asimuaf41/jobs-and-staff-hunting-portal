import {combineReducers} from 'redux';
import menuReducer from './menu_reducer';
import userReducer from './user_reducer';
const rootReducer=combineReducers({
    userReducer
});
export default rootReducer;