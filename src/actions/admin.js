import axios from "axios"
import {
    ADMIN_LIST_REQUEST,
    ADMIN_LIST_SUCCESS,
    ADMIN_LIST_FAIL,

} from './types.js'

export const listAdmin = (user_id) => async (dispatch) => {
    
    try {
        dispatch({ type: ADMIN_LIST_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.get(
            `https://jamly2021.herokuapp.com/api/getsinglestore/${user_id}`,
            config
        )

        dispatch({
            type: ADMIN_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADMIN_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}