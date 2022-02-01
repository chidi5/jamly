import { combineReducers } from 'redux';
import { adminListReducer } from './admin'
import {
    userLoginReducer,
    userRegisterReducer,
    userAccountReducer,
} from './user'

export default combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userAccount: userAccountReducer,
    adminList: adminListReducer,
});