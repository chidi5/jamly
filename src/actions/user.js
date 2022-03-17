import axios from 'axios'
import Cookies from 'js-cookie'
import { useLocation } from 'react-router-dom'
const { pathname } = useLocation()
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_DETAILS_RESET,
    USER_LIST_RESET,

    USER_ACCOUNT_REQUEST,
    USER_ACCOUNT_SUCCESS,
    USER_ACCOUNT_FAIL

} from './types'

//import { ORDER_LIST_MY_RESET } from '../constants/orderConstants'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'https://jamly2021.herokuapp.com/api/user/login',
            { 'username': email, 'password': password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
        Cookies.set('userInfo', JSON.stringify(data), { path: '/', domain: ".joshuaigbokwe.shop" });

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('isComplete')
    Cookies.remove('userInfo', { path: '/',  domain: '.joshuaigbokwe.shop' });
    //localStorage.setItem('clear', 'yes')
    if (localStorage.getItem('userinfo')){
        if(pathname === '/store_login'){
            localStorage.removeItem('userInfo')
        }
    }
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET })
    //dispatch({ type: ORDER_LIST_MY_RESET })
    dispatch({ type: USER_LIST_RESET })
}


export const register = (email, password, store_name, store_domain) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'https://jamly2021.herokuapp.com/api/registeradmin',
            { 'email': email, 'password': password, 'store_name': store_name, 'store_domain': store_domain },
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
        Cookies.set('userInfo', JSON.stringify(data), { path: '/',  domain: '.joshuaigbokwe.shop' });

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const accountComplete = (user_id, first_name, last_name, state, city, street, phone_number, bank, account_number) => async (dispatch) => {
    try {
        dispatch({
            type: USER_ACCOUNT_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        var body = JSON.stringify({ 'user_id': user_id, 'first_name': first_name, 'last_name': last_name, 'state': state, 'city': city, 'street': street, 'phone_number': phone_number, 'bank':bank, 'account_number':account_number })

        console.log(body)

        const { data } = await axios.put(
            'https://jamly2021.herokuapp.com/api/completeadminprofile',
            body,
            config
        )

        dispatch({
            type: USER_ACCOUNT_SUCCESS,
            payload: data
        })

        localStorage.setItem('isComplete', true)

    } catch (error) {
        dispatch({
            type: USER_ACCOUNT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

