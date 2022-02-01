import {
    ADMIN_LIST_REQUEST,
    ADMIN_LIST_SUCCESS,
    ADMIN_LIST_FAIL,

} from '../actions/types.js'

export const adminListReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_LIST_REQUEST:
            return { loading: true }

        case ADMIN_LIST_SUCCESS:
            return { loading: false, admin: action.payload }

        case ADMIN_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}