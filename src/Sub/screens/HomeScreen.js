import React, { useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import LatestOrder from '../partials/dashboard/LatestOrder'
import SaleReport from '../partials/dashboard/SaleReport'
import StockReport from '../partials/dashboard/StockReport'
import TopSeller from '../partials/dashboard/TopSeller'
import WelcomeBanner from '../partials/WelcomeBanner'
import ScreenContainer from './ScreenContainer'
import { listAdmin } from '../../actions/admin'

import Cookies from 'js-cookie'
import Message from '../../Home/components/Message'
import Loader from '../components/Loader'

function HomeScreen() {

    const dispatch = useDispatch()
    const { search } = useLocation()

    const isCompUrl = new URLSearchParams(search).get("profile")
    const isComp = isCompUrl ? isCompUrl : null

    console.log(isComp)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const adminList = useSelector(state => state.adminList)
    const { loading, error, admin } = adminList

    const userAccount = useSelector(state => state.userAccount)
    const { isComplete } = userAccount

    useEffect(() => {
        const cookie = Cookies.get('userInfo', { path: '/', domain: ".joshuaigbokwe.shop" })
        localStorage.userInfo = cookie ? cookie : null
    }, [])
    
    useEffect(() => {
        if(isComplete && isComp) {
            const userId = userInfo.user_details.id
            console.log(userId)
            //dispatch(listAdmin(userId))
        }else if (userInfo && userInfo.user_details.is_merchant && userInfo.user_details.profile_complete) {
            const userId = userInfo.user_details.id
            console.log(userId + ' else')
            //dispatch(listAdmin(userId))
            //console.log('good to go')
        } else {
            //navigate('/admin/account-setup')
            //window.location.assign(`${window.location.protocol}//${window.location.host}/store_login`)
            console.log('e no work')
            //window.location.reload();
        }

    }, [dispatch, userInfo, isComp, isComplete])


    return (
        <ScreenContainer>
            { loading ?
                <Loader />
                : error ? <Message variant='red'>{error}</Message>
                :
                <div>
                    { admin &&  <WelcomeBanner store={admin.store_data} />}
                    { admin && 
                    <div className="grid grid-cols-12 gap-6">
                        {/* First Card */}
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                            <div className="relative shadow-md bg-white rounded-md border-transparent p-5">
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="stroke-1.5 w-7 h-7 inline-block text-blue-800">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                    <div className="ml-auto">
                                        <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div>
                                    </div>
                                </div>
                                <div className="text-3xl font-medium leading-8 mt-6 text-gray-800">4.710</div>
                                <div className="text-base text-gray-600 mt-1">Item Sales</div>
                            </div>
                        </div>
                        {/* Second Card */}
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                            <div className="relative shadow-md bg-white rounded-md border-transparent p-5">
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="stroke-1.5 w-7 h-7 inline-block text-yellow-500">
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                        <line x1="8" y1="21" x2="16" y2="21"></line>
                                        <line x1="12" y1="17" x2="12" y2="21"></line>
                                    </svg>
                                    <div className="ml-auto">
                                        <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+1.5%</div>
                                    </div>
                                </div>
                                <div className="text-3xl font-medium leading-8 mt-6 text-gray-800">3</div>
                                <div className="text-base text-gray-600 mt-1">Total Product</div>
                            </div>
                        </div>
                        {/* Third Card */}
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                            <div className="relative shadow-md bg-white rounded-md border-transparent p-5">
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="stroke-1.5 w-7 h-7 inline-block text-pink-600">
                                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                        <line x1="1" y1="10" x2="23" y2="10"></line>
                                    </svg>
                                    <div className="ml-auto">
                                        <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">-2%</div>
                                    </div>
                                </div>
                                <div className="text-3xl font-medium leading-8 mt-6 text-gray-800">10</div>
                                <div className="text-base text-gray-600 mt-1">New Orders</div>
                            </div>
                        </div>
                        {/* fourth Card */}
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                            <div className="relative shadow-md bg-white rounded-md border-transparent p-5">
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="stroke-1.5 w-7 h-7 inline-block text-green-500">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <div className="ml-auto">
                                        <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div>
                                    </div>
                                </div>
                                <div className="text-3xl font-medium leading-8 mt-6 text-gray-800">200</div>
                                <div className="text-base text-gray-600 mt-1">Unique Visitors</div>
                            </div>
                        </div>

                        {/* Sales Report */}
                        <SaleReport />

                        {/* Top Selling Product */}
                        <TopSeller />

                        {/* Stock Report */}
                        <StockReport />

                        {/* Product Order */}
                        <LatestOrder />

                    </div>
                    }
                </div>
            }
        </ScreenContainer>
    )
}

export default HomeScreen
