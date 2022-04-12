import React, { useEffect } from 'react'
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
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'

function HomeScreen() {

    const dispatch = useDispatch()
    const { search } = useLocation()
    //const isCompUrl = new URLSearchParams(search).get("profile")
    //const isComp = isCompUrl ? isCompUrl : null

    const isLogOutUrl = new URLSearchParams(search).get("logout")
    const isLogout = isLogOutUrl ? isLogOutUrl : null

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
        if ((userInfo && userInfo.user_details.is_merchant && userInfo.user_details.profile_complete) || isComplete) {
            const userId = userInfo.user_details.id
            //console.log(userId + ' else')
            dispatch(listAdmin(userId))
            //console.log('good to go')
        }else {
            if(isLogout) {
                window.location.assign(`${window.location.protocol}//joshuaigbokwe.shop?isLogout=true`)
            }else{
                window.location.assign(`${window.location.protocol}//joshuaigbokwe.shop/store_login`)
            }
            //navigate('/admin/account-setup')
            //window.location.assign(`${window.location.protocol}//localhost.me:3000/store_login`)
            //console.log(`${window.location.protocol}//localhost.me:3000/store_login`)
            //window.location.reload();
        }

    }, [dispatch, userInfo, isComplete, isLogout])

    const goToStoreFront = () => {
        window.open('/', '_blank')
    }


    return (
        <ScreenContainer>
            { loading ?
                <Loader />
                : error ? <Message variant='red'>{error}</Message>
                : admin &&
                (<div>
                    <WelcomeBanner store={admin.store_data} />
                    {/* Dashboard actions */}
                    <div className="sm:flex justify-end sm:items-center mb-8">
                        {/* Right: Actions */}
                        <div className="grid grid-flow-col sm:auto-cols-max justify-end gap-2">
                            {/* Add view button */}
                            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" onClick={goToStoreFront}>
                                <span className="xs:block ml-2 mr-2">Storefront</span>
                                <ArrowNarrowRightIcon className='w-5 h-5 fill-current opacity-50 shrink-0'/>
                            </button>
                        </div>
                    </div>
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
                                <div className="text-3xl font-medium leading-8 mt-6 text-gray-800">&#8358;{admin.all_time_sales.total_price__sum ? admin.all_time_sales.total_price__sum : 0}</div>
                                <div className="text-base text-gray-600 mt-1">Total Sales</div>
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
                                <div className="text-3xl font-medium leading-8 mt-6 text-gray-800">&#8358;{admin.daily_sales.total_price__sum ? admin.daily_sales.total_price__sum : 0}</div>
                                <div className="text-base text-gray-600 mt-1">Daily Sales</div>
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
                                <div className="text-3xl font-medium leading-8 mt-6 text-gray-800">{admin.new_orders.length}</div>
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
                                <div className="text-3xl font-medium leading-8 mt-6 text-gray-800">{admin.num_customers}</div>
                                <div className="text-base text-gray-600 mt-1">Unique Customers</div>
                            </div>
                        </div>

                        {/* Sales Report */}
                        <SaleReport />

                        {/* Top Selling Product */}
                        <TopSeller top={admin.top_orders} />

                        {/* Stock Report */}
                        <StockReport />

                        {/* Product Order */}
                        <LatestOrder />

                    </div>
                </div>)
            }
        </ScreenContainer>
    )
}

export default HomeScreen
