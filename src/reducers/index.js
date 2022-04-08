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
    categoryDetailsReducer,
    categoryCreateReducer,
    categoryUpdateReducer
} from './product'
import { storeFrontReducer } from './storefront'
import {
    userLoginReducer,
    userRegisterReducer,
    userAccountReducer,
    customerListReducer,
} from './user'

export default combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userAccount: userAccountReducer,
    adminList: adminListReducer,
    customerList: customerListReducer,
    
    cart: cartReducer,

    orderList: orderListReducer,
    orderDetails: orderDetailsReducer,

    productList: productListReducer,
    productDetails: productDetailsReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    categoryList: categoryListReducer,
    categoryDetails: categoryDetailsReducer,
    categoryCreate: categoryCreateReducer,
    categoryUpdate: categoryUpdateReducer,
    storeFront: storeFrontReducer,
});