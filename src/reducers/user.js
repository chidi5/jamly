import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_ACCOUNT_REQUEST,
    USER_ACCOUNT_SUCCESS,
    USER_ACCOUNT_FAIL,

} from '../actions/types.js'

const initialSate = {
    isComplete: null,
}


export const userLoginReducer = (state = initialSate, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }

        case USER_LOGIN_SUCCESS:
            return { ...state, loading: false, isComplete: action.payload.user_details.profile_complete, userInfo: action.payload }

        case USER_LOGIN_FAIL:
            return { ...state, loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}


export const userRegisterReducer = (state = initialSate, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }

        case USER_REGISTER_SUCCESS:
            return { ...state, loading: false, isComplete:false, userInfo: action.payload }

        case USER_REGISTER_FAIL:
            return { ...state, loading: false, isComplete:false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userAccountReducer = (state = initialSate, action) => {
    switch (action.type) {
        case USER_ACCOUNT_REQUEST:
            return { loading: true }

        case USER_ACCOUNT_SUCCESS:
            return { ...state, loading: false, isComplete:true, message: action.payload }

        case USER_ACCOUNT_FAIL:
            return { ...state, loading: false, isComplete:false, error: action.payload }

        default:
            return state
    }
}
