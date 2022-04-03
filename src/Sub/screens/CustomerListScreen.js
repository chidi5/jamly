import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCustomers } from '../../actions/user'
import Message from '../../Home/components/Message'
import Loader from '../components/Loader'
import ScreenContainer from './ScreenContainer'

function CustomerListScreen() {
    const dispatch = useDispatch()

    const customerList = useSelector(state => state.customerList)
    const { loading, error, customer } = customerList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo && userInfo.user_details.is_merchant) {
            dispatch(listCustomers(userInfo.store_details._id))
        } else {
            window.location.assign(`${window.location.protocol}//joshuaigbokwe.shop/store_login`)
        }

    }, [dispatch, userInfo])

    return (
        <ScreenContainer>
            { loading
                ? (<Loader />)
                : error
                    ? (<Message variant='red'>{error}</Message>)
                    :(<div className='border-0 shadow-md flex flex-col relative rounded-md break-words min-w-0 pt-5 bg-white'>
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
                                    <input type="text" className='bg-gray-100 border-gray-100 w-64 px-4 font-medium text-base border-solid rounded-lg appearance-none pl-14 focus:ring-transparent focus:border-transparent' placeholder="Search Customer" />
                                </div>
                            </div>
                        </div>
                        <div className='py-8 px-9 pt-0 mt-16 pb-32 flex-auto overflow-x-auto'>
                            <div>
                                <div className='relative'>
                                    <table className='w-full m-0'>
                                        <thead>
                                            <tr className='text-left text-gray-400 uppercase text-xs font-semibold border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                <th className='min-w-[90px] w-[90.5px]'>Customer id</th>
                                                <th className='min-w-[150px] w-[150px]'>Customer</th>
                                                <th className='text-right min-w-[70px] w-[88.9px]'>email</th>
                                            </tr>
                                        </thead>
                                        <tbody className='font-medium text-gray-600'>
                                            {customer.store_customers.map(item =>(
                                                <tr key={item._id} className='border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                    <td className='py-5'>
                                                        <span className=' text-gray-800 font-semibold text-sm'>{item._id}</span>
                                                    </td>
                                                    <td>
                                                        <div className='flex items-center'>
                                                            <div className='w-10 h-10 flex items-center justify-center bg-indigo-100 bg-no-repeat bg-center bg-cover transition duration-150 rounded-full'>
                                                                <div className='items-center font-medium text-indigo-500 text-md'>{item.first_name.charAt(0)}</div>
                                                            </div>
                                                            <div className='ml-3'>
                                                                <a href="#" className=' text-gray-800 hover:text-blue-500 font-semibold text-sm'>{`${item.first_name} ${item.last_name}`}</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='text-right pr-0'>
                                                        <span className="font-semibold text-sm text-gray-500">{item.email}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
            }
        </ScreenContainer>
    )
}

export default CustomerListScreen