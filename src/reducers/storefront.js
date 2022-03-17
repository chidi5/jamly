import {
    STORE_REQUEST,
    STORE_SUCCESS,
    STORE_FAIL,
} from '../actions/types'

export const storeFrontReducer = (state = {}, action) => {
    switch (action.type) {
        case STORE_REQUEST:
            return { loading: true }

        case STORE_SUCCESS:
            return { loading: false, store: action.payload }

        case STORE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}