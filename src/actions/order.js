import axios from 'axios'
import {
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
}from './types'

export const listOrders = (id) => async (dispatch) => {
    
    try {
        dispatch({ type: ORDER_LIST_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.get(
            `https://jamly2021.herokuapp.com/api/getstoreorders/${id}`,
            config
        )

        dispatch({
            type: ORDER_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getOrderDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: ORDER_DETAILS_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.get(
            `https://jamly2021.herokuapp.com/api/getorderdetails/${id}`,
            config
        )

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}