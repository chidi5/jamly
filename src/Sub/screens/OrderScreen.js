import React, { Fragment, useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../Home/components/Message'
import Loader from '../components/Loader'
import ScreenContainer from './ScreenContainer';
import { getOrderDetails } from '../../actions/order'

function OrderScreen() {

    const { id } = useParams();
    const dispatch = useDispatch()

    const orderDetails = useSelector(state => state.orderDetails)
    const { loading, error, order } = orderDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {
        if (!userInfo) {
            //console.log('wait boy')
            window.location.assign(`${window.location.protocol}//joshuaigbokwe.shop/store_login`)
        }
        if (!order || order.order_details._id !== Number(id)) {
            //history.push('/login')
            dispatch(getOrderDetails(id))
        }

    }, [dispatch, userInfo, order, id])

    return (
        <ScreenContainer>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='red'>{error}</Message>)
                    : ( <div className="grid grid-cols-12 gap-7 xl:gap-10">
                            {/* First Card */}
                            <div className="col-span-12 xl:col-span-6">
                                <div className="relative shadow-md bg-white rounded-md border-transparent py-4 px-9">
                                    {/* Card Header */}
                                    <div className='flex flex-wrap justify-between py-0 bg-transparent gap-2 border-b-0 items-center md:gap-5'>
                                        {/* card title */}
                                        <div className='flex items-center m-2 ml-0 font-semibold text-xl leading-8 text-gray-800'>
                                            <h2>{`Order Details (#${order.order_details._id})`}</h2>
                                        </div>
                                    </div>
                                    <div className='pt-0 py-8 mt-4 flex-auto'>
                                        <div>
                                            <div className='relative overflow-x-auto'>
                                                <table className='w-full min-w-[300px] mb-0 align-middle text-base'>
                                                    <tbody className='text-gray-600 font-medium'>
                                                        <tr className='border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                            <td className="text-gray-400 py-3">
                                                                <div className="flex items-center">
                                                                    <span className="leading-4 mr-2">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 20 21">
                                                                            <path className='fill-current text-gray-500' opacity="0.3" d="M19 3.40002C18.4 3.40002 18 3.80002 18 4.40002V8.40002H14V4.40002C14 3.80002 13.6 3.40002 13 3.40002C12.4 3.40002 12 3.80002 12 4.40002V8.40002H8V4.40002C8 3.80002 7.6 3.40002 7 3.40002C6.4 3.40002 6 3.80002 6 4.40002V8.40002H2V4.40002C2 3.80002 1.6 3.40002 1 3.40002C0.4 3.40002 0 3.80002 0 4.40002V19.4C0 20 0.4 20.4 1 20.4H19C19.6 20.4 20 20 20 19.4V4.40002C20 3.80002 19.6 3.40002 19 3.40002ZM18 10.4V13.4H14V10.4H18ZM12 10.4V13.4H8V10.4H12ZM12 15.4V18.4H8V15.4H12ZM6 10.4V13.4H2V10.4H6ZM2 15.4H6V18.4H2V15.4ZM14 18.4V15.4H18V18.4H14Z"></path>
                                                                            <path className='fill-current text-gray-400' d="M19 0.400024H1C0.4 0.400024 0 0.800024 0 1.40002V4.40002C0 5.00002 0.4 5.40002 1 5.40002H19C19.6 5.40002 20 5.00002 20 4.40002V1.40002C20 0.800024 19.6 0.400024 19 0.400024Z"></path>
                                                                        </svg>
                                                                    </span>
                                                                    Date Added
                                                                </div>
                                                            </td>
                                                            <td className="font-semibold text-right text-gray-500">{order.order_details.created_at.substring(0, 10)}</td>
                                                        </tr>
                                                        <tr className='border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                            <td className="text-gray-400 py-3">
                                                                <div className="flex items-center">
                                                                    <span className="leading-4 mr-2">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24">
                                                                            <path className='fill-current text-gray-500' opacity="0.3" d="M3.20001 5.91897L16.9 3.01895C17.4 2.91895 18 3.219 18.1 3.819L19.2 9.01895L3.20001 5.91897Z"></path>
                                                                            <path className='fill-current text-gray-500' opacity="0.3" d="M13 13.9189C13 12.2189 14.3 10.9189 16 10.9189H21C21.6 10.9189 22 11.3189 22 11.9189V15.9189C22 16.5189 21.6 16.9189 21 16.9189H16C14.3 16.9189 13 15.6189 13 13.9189ZM16 12.4189C15.2 12.4189 14.5 13.1189 14.5 13.9189C14.5 14.7189 15.2 15.4189 16 15.4189C16.8 15.4189 17.5 14.7189 17.5 13.9189C17.5 13.1189 16.8 12.4189 16 12.4189Z"></path>
                                                                            <path className='fill-current text-gray-400' d="M13 13.9189C13 12.2189 14.3 10.9189 16 10.9189H21V7.91895C21 6.81895 20.1 5.91895 19 5.91895H3C2.4 5.91895 2 6.31895 2 6.91895V20.9189C2 21.5189 2.4 21.9189 3 21.9189H19C20.1 21.9189 21 21.0189 21 19.9189V16.9189H16C14.3 16.9189 13 15.6189 13 13.9189Z"></path>
                                                                        </svg>
                                                                    </span>
                                                                    Payment Method
                                                                </div>
                                                            </td>
                                                            <td className="font-semibold text-right text-gray-500">Card</td>
                                                        </tr>
                                                        <tr className='border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                            <td className="text-gray-400 py-3">
                                                                <div className="flex items-center">
                                                                    <span className="leading-4 mr-2">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24">
                                                                            <path className='fill-current text-gray-400' d="M20 8H16C15.4 8 15 8.4 15 9V16H10V17C10 17.6 10.4 18 11 18H16C16 16.9 16.9 16 18 16C19.1 16 20 16.9 20 18H21C21.6 18 22 17.6 22 17V13L20 8Z"></path>
                                                                            <path className='fill-current text-gray-500' opacity="0.3" d="M20 18C20 19.1 19.1 20 18 20C16.9 20 16 19.1 16 18C16 16.9 16.9 16 18 16C19.1 16 20 16.9 20 18ZM15 4C15 3.4 14.6 3 14 3H3C2.4 3 2 3.4 2 4V13C2 13.6 2.4 14 3 14H15V4ZM6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16Z"></path>
                                                                        </svg>
                                                                    </span>
                                                                    Shipping Method
                                                                </div>
                                                            </td>
                                                            <td className="font-semibold text-right text-gray-500">Ship within Lagos</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            {/* Second Card */}
                            <div className="col-span-12 xl:col-span-6">
                                <div className="relative shadow-md bg-white rounded-md border-transparent py-4 px-9">
                                    {/* Card Header */}
                                    <div className='flex flex-wrap justify-between py-0 bg-transparent gap-2 border-b-0 items-center md:gap-5'>
                                        {/* card title */}
                                        <div className='flex items-center m-2 ml-0 font-semibold text-xl leading-8 text-gray-800'>
                                            <h2>Customer Details</h2>
                                        </div>
                                    </div>
                                    <div className='pt-0 py-8 mt-4 flex-auto'>
                                        <div>
                                            <div className='relative overflow-x-auto'>
                                                <table className='w-full min-w-[300px] mb-0 align-middle text-base'>
                                                    <tbody className='text-gray-600 font-medium'>
                                                        <tr className='border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                            <td className="text-gray-400 py-3">
                                                                <div className="flex items-center">
                                                                    <span className="leading-4 mr-2">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24">
                                                                            <path className='fill-current text-gray-500' opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z"></path>
                                                                            <path className='fill-current text-gray-400' d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z"></path>
                                                                        </svg>
                                                                    </span>
                                                                    Customer
                                                                </div>
                                                            </td>
                                                            <td className="font-semibold text-right text-gray-500">
                                                                <div className='flex justify-end'>
                                                                    <div className='w-6 h-6 flex items-center justify-center bg-indigo-100 bg-no-repeat bg-center bg-cover transition duration-150 rounded-full'>
                                                                        <div className='items-center font-medium text-indigo-500'>{order.shipping_details.first_name.charAt(0)}</div>
                                                                    </div>
                                                                    <div className='ml-2'>
                                                                    {`${order.shipping_details.first_name} ${order.shipping_details.last_name}`}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className='border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                            <td className="text-gray-400 py-3">
                                                                <div className="flex items-center">
                                                                    <span className="leading-4 mr-2">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24" fill="none">
                                                                            <path className='fill-current text-gray-500' opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"></path>
                                                                            <path className='fill-current text-gray-400' d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"></path>
                                                                        </svg>
                                                                    </span>
                                                                    Email
                                                                </div>
                                                            </td>
                                                            <td className="font-semibold text-right text-gray-500">{order.shipping_details.email ? order.shipping_details.email : 'none' }</td>
                                                        </tr>
                                                        <tr className='border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                            <td className="text-gray-400 py-3">
                                                                <div className="flex items-center">
                                                                    <span className="leading-4 mr-2">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24" >
                                                                            <path className='fill-current text-gray-400' d="M5 20H19V21C19 21.6 18.6 22 18 22H6C5.4 22 5 21.6 5 21V20ZM19 3C19 2.4 18.6 2 18 2H6C5.4 2 5 2.4 5 3V4H19V3Z"></path>
                                                                            <path className='fill-current text-gray-500' opacity="0.3" d="M19 4H5V20H19V4Z" ></path>
                                                                        </svg>
                                                                    </span>
                                                                    Phone
                                                                </div>
                                                            </td>
                                                            <td className="font-semibold text-right text-gray-500">{order.shipping_details.phone_number}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            {/* Third Card */}
                            <div className="col-span-12 xl:col-span-6">
                                <div className="relative shadow-md bg-white rounded-md border-transparent py-4 px-9">
                                    <div className="absolute top-0 right-0 pointer-events-none opacity-10 text-right">
                                        <img alt='payment icon' src="https://preview.keenthemes.com/metronic8/demo1/assets/media/icons/duotune/ecommerce/ecm001.svg" className="w-[175px]" />
                                    </div>
                                    {/* Card Header */}
                                    <div className='flex flex-wrap justify-between py-0 bg-transparent gap-2 border-b-0 items-center md:gap-5'>
                                        {/* card title */}
                                        <div className='flex items-center m-2 ml-0 font-semibold text-xl leading-8 text-gray-800'>
                                            <h2>Payment Address</h2>
                                        </div>
                                    </div>
                                    {/* Card Body */}
                                    <div className='pt-0 py-8 mt-4 flex-auto'>
                                        {order.shipping_details.street},
                                        <br/>{order.shipping_details.city},
                                        <br/>{order.shipping_details.state},
                                        <br/>Nigeria.
                                    </div>
                                </div>
                            </div>
                            {/* Fourth Card */}
                            <div className="col-span-12 xl:col-span-6">
                                <div className="relative shadow-md bg-white rounded-md border-transparent py-4 px-9">
                                    <div className="absolute top-0 right-0 pointer-events-none opacity-10 text-right">
                                        <img alt='shipping icon' src="https://preview.keenthemes.com/metronic8/demo1/assets/media/icons/duotune/ecommerce/ecm006.svg" className="w-[175px]" />
                                    </div>
                                    {/* Card Header */}
                                    <div className='flex flex-wrap justify-between py-0 bg-transparent gap-2 border-b-0 items-center md:gap-5'>
                                        {/* card title */}
                                        <div className='flex items-center m-2 ml-0 font-semibold text-xl leading-8 text-gray-800'>
                                            <h2>Shipping Address</h2>
                                        </div>
                                    </div>
                                    {/* Card Body */}
                                    <div className='pt-0 py-8 mt-4 flex-auto'>
                                        {order.shipping_details.street},
                                        <br/>{order.shipping_details.city},
                                        <br/>{order.shipping_details.state},
                                        <br/>Nigeria.
                                    </div>
                                </div>
                            </div>
                            {/* Fifth Card */}
                            <div className="col-span-12">
                                <div className="relative shadow-md bg-white rounded-md border-transparent py-4 px-9">
                                    {/* Card Header */}
                                    <div className='flex flex-wrap justify-between py-0 bg-transparent gap-2 border-b-0 items-center md:gap-5'>
                                        {/* card title */}
                                        <div className='flex items-center m-2 ml-0 font-semibold text-xl leading-8 text-gray-800'>
                                            <h2>{`Order Details (#${order.order_details._id})`}</h2>
                                        </div>
                                    </div>
                                    {/* Card Body */}
                                    <div className='pt-0 py-8 mt-4 flex-auto'>
                                        <div>
                                            <div className='relative overflow-x-auto'>
                                                <table className='w-full m-0'>
                                                    <thead>
                                                        <tr className='text-left text-gray-400 uppercase text-xs font-semibold border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                            <th className='min-w-[175px]'>Product</th>
                                                            <th className='min-w-[100px] text-right'>SKU</th>
                                                            <th className='text-right min-w-[70px]'>Qty</th>
                                                            <th className='text-right min-w-[100px]'>Unit price</th>
                                                            <th className='text-right min-w-[100px]'>Total</th>
                                                        </tr>
                                                    </thead>
                                                    {order.order_items.length === 0 ? <Message variant='indigo'>Order is empty </Message>
                                                    :
                                                        (<tbody className='font-medium text-gray-600 text-sm'>
                                                            {order.order_items.map((item, index) => (
                                                                <tr key={index} className='border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                                    <td className='text-gray-500 py-3'>
                                                                        <div className='flex justify-start items-center text-sm'>
                                                                            <a href="#" className="relative inline-block flex-shrink-0 rounded-md">
                                                                                <span className="flex items-center justify-center w-10 h-10 bg-cover bg-no-repeat bg-center bg-gray-100 rounded-md" style={{backgroundImage:`url(${item.product.image})`}}></span>
                                                                            </a>
                                                                            <div className='ml-3'>
                                                                                <a href="#" className='font-semibold text-gray-500 hover:text-blue-500'>{item.product.name}</a>
                                                                                <div className="text-xs text-gray-400">Delivery Date: 08/02/2022</div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className='text-right text-gray-500 py-3'>{item.product._id}</td>
                                                                    <td className='text-right text-gray-500 py-3'>{item.quantity_ordered}</td>
                                                                    <td className='text-right text-gray-500 py-3'>&#8358;{item.product.price}</td>
                                                                    <td className='text-right text-gray-500 py-3'>&#8358;{(item.quantity_ordered * item.product.price).toFixed(2)}</td>
                                                                </tr>
                                                            ))}
                                                                <tr className='border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                                    <td colSpan="4" className="text-right text-gray-500 py-3">Subtotal</td>
                                                                    <td className="text-right">&#8358;264.00</td>
                                                                </tr>
                                                                <tr className='border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                                    <td colSpan="4" className="text-right text-gray-500 py-3">VAT (0%)</td>
                                                                    <td className="text-right">&#8358;0.00</td>
                                                                </tr>
                                                                <tr className='border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                                    <td colSpan="4" className="text-right text-gray-500 py-3">Shipping Rate</td>
                                                                    <td className="text-right">&#8358;{order.order_details.shipping_price}</td>
                                                                </tr>
                                                                <tr className='border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                                    <td colSpan="4" className="text-right text-gray-800 py-3 text-lg">Grand Total</td>
                                                                    <td className="text-right text-gray-800 text-lg font-semibold">&#8358;{order.order_details.total_price}</td>
                                                                </tr>
                                                        </tbody>)
                                                    }
                                                </table>
                                            </div>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>)
            }
        </ScreenContainer>
    )
}

export default OrderScreen
