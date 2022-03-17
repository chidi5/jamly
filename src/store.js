import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const isCompleteFromStorage = localStorage.getItem('isComplete') ?
    JSON.parse(localStorage.getItem('isComplete')) : null

const initialState = {
	cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage, isComplete: isCompleteFromStorage },
	userAccount: { isComplete: isCompleteFromStorage }
}

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;