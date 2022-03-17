import axios from 'axios'
import {
    STORE_REQUEST,
    STORE_SUCCESS,
    STORE_FAIL,

} from './types'


export const loadStore = (name) => async (dispatch) => {
    try {
        dispatch({ type: STORE_REQUEST })

        const { data } = await axios.get(`https://jamly2021.herokuapp.com/api/loadstorefront/${name}`)

        dispatch({
            type: STORE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: STORE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}