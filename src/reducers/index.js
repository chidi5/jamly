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
    productDeleteReducer,
    productUpdateReducer,
    categoryListReducer,
    categoryDetailsReducer,
    categoryCreateReducer,
    categoryDeleteReducer,
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
    productDelete: productDeleteReducer,
    productUpdate: productUpdateReducer,
    categoryList: categoryListReducer,
    categoryDetails: categoryDetailsReducer,
    categoryCreate: categoryCreateReducer,
    categoryDelete: categoryDeleteReducer,
    categoryUpdate: categoryUpdateReducer,
    storeFront: storeFrontReducer,
});