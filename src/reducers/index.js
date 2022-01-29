import { combineReducers } from 'redux';
import {
    userLoginReducer,
    userRegisterReducer,
    userAccountReducer,
} from './user'

export default combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userAccount: userAccountReducer,
});