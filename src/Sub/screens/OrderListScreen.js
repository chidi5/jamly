import React, { useEffect } from 'react'
import ActionDropdown from '../partials/ActionDropdown'
import ScreenContainer from './ScreenContainer'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../Home/components/Message'
import Loader from '../components/Loader'
import { listOrders } from '../../actions/order'
import { Link } from 'react-router-dom'

function OrderListScreen() {

    const dispatch = useDispatch()

    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = orderList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {
        if (userInfo && userInfo.user_details.is_merchant) {
            dispatch(listOrders(userInfo.store_details._id))
        } else {
            //history.push('/login')
            window.location.assign(`${window.location.protocol}//joshuaigbokwe.shop/store_login`)
            //console.log('wait boy')
        }

    }, [dispatch, userInfo])

    const DateHandler = (x) => {
        const date = new Date(x);
        return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();//prints expected format.
    }

    return (
        <ScreenContainer>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='red'>{error}</Message>)
                    : (<div className='border-0 shadow-md flex flex-col relative rounded-md break-words min-w-0 pt-5 bg-white'>
                            <div className='flex flex-wrap justify-between py-0 px-9 bg-transparent gap-2 border-b-0 items-center md:gap-5'>
                                {/* card title */}
                                <div className='flex items-center m-2 ml-0 font-bold text-sm text-gray-600'>
                                    <div className='flex relative my-1 items-center'>
                                        <span className='absolute ml-4 leading-4'>
                                            <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path className="fill-current text-gray-500" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                                            <path className="fill-current text-gray-400" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                                            </svg>
                                        </span>
                                        <input type="text" className='bg-gray-100 border-gray-100 w-64 px-4 font-medium text-base border-solid rounded-lg appearance-none pl-14 focus:ring-transparent focus:border-transparent' placeholder="Search Order" />
                                    </div>
                                </div>
                                {/* card toolbar */}
                                <div className='grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-5 text-gray-600'>
                                    <div className='w-full max-w-150'>
                                        <select
                                            id="Bank"
                                            name="Bank"
                                            className="bg-gray-100 border-gray-100 px-4 font-medium text-base border-solid rounded-lg appearance-none focus:ring-transparent focus:border-transparent block w-full focus:outline-none"
                                        >
                                            
                                            <option value="First Bank">First Bank</option>
                                            <option value="GT Bank">GT Bank</option>
                                            <option value="Zenith Bank">Zenith Bank</option>
                                        </select>
                                    </div>
                                    {/* Add view button */}
                                    <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg">
                                        <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                                        </svg>
                                        <span className="hidden xs:block ml-2">Add Order</span>
                                    </button>
                                </div>
                            </div>
                            <div className='py-8 px-9 pt-0 mt-16 pb-32 flex-auto overflow-x-auto'>
                                <div>
                                    <div className='relative'>
                                        <table className='w-full m-0'>
                                            <thead>
                                                <tr className='text-left text-gray-400 uppercase text-xs font-semibold border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                    <th className='min-w-[90px] w-[90.5px]'>Order id</th>
                                                    <th className='min-w-[150px] w-[150px]'>Customer</th>
                                                    <th className='text-right min-w-[70px] w-[88.9px]'>Status</th>
                                                    <th className='text-right min-w-[100px] w-[108.5px]'>Total</th>
                                                    <th className='text-right min-w-[100px] w-[108.5px]'>Date added</th>
                                                    <th className='text-right min-w-[100px] w-[108.5px]'>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className='font-medium text-gray-600'>
                                            {orders.map(order => (
                                                <tr key={order._id} className='border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                    <td className='py-5'>
                                                        <Link to={`/admin/order/${order._id}`} className=' text-gray-800 hover:text-blue-500 font-semibold text-sm'>{order._id}</Link>
                                                    </td>
                                                    <td>
                                                        <div className='flex items-center'>
                                                            <div className='w-10 h-10 flex items-center justify-center bg-indigo-100 bg-no-repeat bg-center bg-cover transition duration-150 rounded-full'>
                                                                <div className='items-center font-medium text-indigo-500 text-md'>{order.first_name.charAt(0)}</div>
                                                            </div>
                                                            <div className='ml-3'>
                                                                <a href="#" className=' text-gray-800 hover:text-blue-500 font-semibold text-sm'>{`${order.first_name} ${order.last_name}`}</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    { order.is_paid ?
                                                        <td className='text-right pr-0'>
                                                            <div className="py-1 px-2 inline-block align-baseline rounded-lg bg-green-100 text-green-600 cursor-pointer whitespace-nowrap text-xs text-center"> Processed </div>
                                                        </td>
                                                        :
                                                        <td className='text-right pr-0'>
                                                            <div className="py-1 px-2 inline-block align-baseline rounded-lg bg-yellow-100 text-yellow-600 cursor-pointer whitespace-nowrap text-xs text-center"> Pending </div>
                                                        </td>
                                                    }
                                                    <td className='text-right pr-0'>
                                                        <span className="font-semibold text-sm text-gray-500">&#8358;{order.total_price}</span>
                                                    </td>
                                                    <td className='text-right pr-0'>
                                                        <span className="font-semibold text-sm text-gray-500">{order.created_at.substring(0, 10)}</span>
                                                    </td>
                                                    <td className='text-right pr-0'>
                                                        <ActionDropdown item={order} />
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>)
            }
        </ScreenContainer>
    )
}

export default OrderListScreen
