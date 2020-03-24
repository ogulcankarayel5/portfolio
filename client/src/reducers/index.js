import {combineReducers} from 'redux';
import userReducer from './userReducer';
//root reducer kaldırabilrsn
export default combineReducers({
    userReducer:userReducer
});

