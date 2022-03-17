import { combineReducers } from 'redux';
import { adminListReducer } from './admin'
import { cartReducer } from './cart'
import { 
    orderListReducer,
    orderDetailsReducer,
} from './order'
import { 
    productListReducer,
    productDetailsReducer,
    productCreateReducer,
    productUpdateReducer,
    categoryListReducer,
    categoryCreateReducer,
    categoryUpdateReducer
} from './product'
import { storeFrontReducer } from './storefront'
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
    
    cart: cartReducer,

    orderList: orderListReducer,
    orderDetails: orderDetailsReducer,

    productList: productListReducer,
    productDetails: productDetailsReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    categoryList: categoryListReducer,
    categoryCreate: categoryCreateReducer,
    categoryUpdate: categoryUpdateReducer,
    storeFront: storeFrontReducer,
});