import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,

    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,

    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,

    CATEGORY_CREATE_REQUEST,
    CATEGORY_CREATE_SUCCESS,
    CATEGORY_CREATE_FAIL,

    CATEGORY_UPDATE_REQUEST,
    CATEGORY_UPDATE_SUCCESS,
    CATEGORY_UPDATE_FAIL,

} from './types'


export const listProducts = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get(`https://jamly2021.herokuapp.com/api/getstoreproducts/${id}`)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `https://jamly2021.herokuapp.com/api/createproduct`,
            {'store_id': id},
            config
        )
        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateProduct = (product) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_UPDATE_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.put(
            `/api/products/update/${product._id}/`,
            product,
            config
        )
        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`https://jamly2021.herokuapp.com/api/productdetails/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listCategory = (id) => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST })

        const { data } = await axios.get(`https://jamly2021.herokuapp.com/api/getStoreCategories/${id}`)

        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createCategory = (name, desc, id) => async (dispatch) => {
    try {
        dispatch({
            type: CATEGORY_CREATE_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `https://jamly2021.herokuapp.com/api/createcategory`,
            {'category_name': name, 'description': desc, 'store_id': id},
            config
        )
        dispatch({
            type: CATEGORY_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: CATEGORY_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateCategory = (category) => async (dispatch) => {
    try {
        dispatch({
            type: CATEGORY_UPDATE_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.put(
            `https://jamly2021.herokuapp.com/api/updatecategory`,
            category,
            config
        )
        dispatch({
            type: CATEGORY_UPDATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: CATEGORY_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}