import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'


const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const isCompletedFromStorage = localStorage.getItem('isCompleted') ?
    JSON.parse(localStorage.getItem('isCompleted')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage, isCompleted: isCompletedFromStorage },
}

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;