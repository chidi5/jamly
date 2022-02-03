import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../Home/components/Message'
import { accountComplete } from '../../actions/user'
import Cookies from 'js-cookie'


function AccountSetup() {
    
    const [id, setId] = useState('')
    const [first_name, setFirst] = useState('')
    const [last_name, setLast] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [phone_number, setPhone] = useState('')
    const [bank, setBank] = useState('')
    const [account_number, setAccount] = useState('')

    const navigate = useNavigate ()
    //const { search } = useLocation()

    const dispatch = useDispatch()

    const userAccount = useSelector(state => state.userAccount)
    const { error, isComplete } = userAccount

    //const cookie = Cookies.get('userInfo', { path: '/', domain: ".joshuaigbokwe.shop" })
    //localStorage.userInfo = cookie ? cookie : null

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        const cookie = Cookies.get('userInfo', { path: '/', domain: ".joshuaigbokwe.shop" })
        localStorage.userInfo = cookie ? cookie : null
    }, [])
    
    useEffect(() => {
        console.log(isComplete)
        if (isComplete) {
            navigate('/admin?profile=true')
        }
        setId(userInfo ? userInfo.user_details.id : null)
        console.log(id)
    }, [userInfo, navigate, id])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(accountComplete(id, first_name, last_name, state, city, street, phone_number, bank, account_number))
        //console.log(id, first_name, last_name, state, city, street, phone_number, bank, account_number)
    }

    return (
        <Fragment>
            {error && <Message variant='red'>{error}</Message>}
            <div className='flex flex-col justify-center items-center px-6 my-6'>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={submitHandler}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <h2 className="mt-8 font-bold text-2xl text-gray-900 text-center">Complete store details to proceed</h2>
                                <p className="leading-5 tracking-wide font-medium text-xs md:text-sm text-gray-700 my-2 text-center">This will be used as your default account details. <br/> You can always change it later</p>
                                <div className="grid grid-cols-6 gap-6 mt-12">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        First name
                                        </label>
                                        <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={first_name} onChange={(e) => setFirst(e.target.value)}
                                        />
                                    </div>
            
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Last name
                                        </label>
                                        <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={last_name} onChange={(e) => setLast(e.target.value)}
                                        />
                                    </div>
                
                                    <div className="col-span-6">
                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                            Address
                                        </label>
                                        <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={street} onChange={(e) => setStreet(e.target.value)}
                                        />
                                    </div>
                
                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City
                                        </label>
                                        <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={city} onChange={(e) => setCity(e.target.value)}
                                        />
                                    </div>
                
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                        State / Province
                                        </label>
                                        <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={state} onChange={(e) => setState(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label htmlFor="Bank" className="block text-sm font-medium text-gray-700">
                                            Bank
                                        </label>
                                        <select
                                        id="Bank"
                                        name="Bank"
                                        autoComplete="Bank-name"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        value={bank} onChange={(e) => setBank(e.target.value)}
                                        >
                                            <option value="First Bank">First Bank</option>
                                            <option value="GT Bank">GT Bank</option>
                                            <option value="Zenith Bank">Zenith Bank</option>
                                        </select>
                                    </div>
                
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="account-number" className="block text-sm font-medium text-gray-700">
                                            Account Number
                                        </label>
                                        <input
                                        type="text"
                                        name="account-number"
                                        id="account-number"
                                        autoComplete="account-number"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={account_number} onChange={(e) => setAccount(e.target.value)}
                                        />
                                    </div>
                
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                                            Phone Number
                                        </label>
                                        <input
                                        type="tel"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="phone-number"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={phone_number} onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default AccountSetup
