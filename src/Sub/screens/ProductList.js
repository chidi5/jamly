import React, { useEffect } from 'react'
import ActionDropdown from '../partials/ActionDropdown'
import ScreenContainer from './ScreenContainer'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../Home/components/Message'
import Loader from '../components/Loader'
import { createProduct, listProducts } from '../../actions/product'
import { Link, useNavigate } from 'react-router-dom'
import { PRODUCT_CREATE_RESET } from '../../actions/types'

function ProductList() {

    const dispatch = useDispatch()
    const navigate = useNavigate ()

    const productList = useSelector(state => state.productList)
    const { loading, error, products} = productList

    const productCreate = useSelector(state => state.productCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct } = productCreate

    const productDelete = useSelector(state => state.productDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET })

        if (!userInfo.user_details.is_merchant) {
            //history.push('/login')
            //console.log('push to login')
            window.location.assign(`${window.location.protocol}//joshuaigbokwe.shop/store_login`)
        }

        if (successCreate) {
            navigate(`/admin/product/${createdProduct._id}/edit`)
        } else {
            const id = userInfo.store_details._id
            dispatch(listProducts(id))
        }

    }, [dispatch, navigate, userInfo, successCreate, successDelete, createdProduct])

    const createProductHandler = () => {
        dispatch(createProduct(45))
    }

    return (
        <ScreenContainer>
            
            {loadingCreate && <Loader />}
            {errorCreate && <Message variant='red'>{errorCreate}</Message>}

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
                                        <input type="text" className='bg-gray-100 border-gray-100 w-64 px-4 font-medium text-base border-solid rounded-lg appearance-none pl-14 focus:ring-transparent focus:border-transparent' placeholder="Search Product" />
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
                                    <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg" onClick={createProductHandler}>
                                        <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                                        </svg>
                                        <span className="hidden xs:block ml-2">Add Product</span>
                                    </button>
                                </div>
                            </div>
                            <div className='py-8 px-9 pt-0 mt-16 pb-20 flex-auto overflow-x-auto overflow-y-hidden'>
                                <div>
                                    <div className='relative'>
                                        <table className='w-full m-0'>
                                            <thead>
                                                <tr className='text-left text-gray-400 uppercase text-xs font-semibold border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                    <th className='min-w-[90px] w-[90.5px]'>ID</th>
                                                    <th className='min-w-[150px] w-[150px]'>Product</th>
                                                    <th className='text-right min-w-[70px] w-[88.9px]'>QTY</th>
                                                    <th className='text-right min-w-[70px] w-[88.9px]'>Price</th>
                                                    <th className='text-right min-w-[100px] w-[108.5px]'>Status</th>
                                                    <th className='text-right min-w-[100px] w-[108.5px]'>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className='font-medium text-gray-600'>
                                            {products.map(product => (
                                                <tr key={product._id} className='border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                                                    <td className='py-5'>
                                                        <Link to={`/admin/product/${product._id}/edit`} className=' text-gray-800 hover:text-blue-500 font-semibold text-sm'>{product._id}</Link>
                                                    </td>
                                                    <td>
                                                        <div className='flex justify-start items-center text-sm'>
                                                            <Link to="#" className="relative items-center justify-center flex-shrink-0">
                                                                <span className="flex w-10 h-10 bg-cover bg-no-repeat bg-center bg-[#f5f8fa] rounded-md" style={{backgroundImage:`url(${product.image})`}}></span>
                                                            </Link>
                                                            <div className='ml-3'>
                                                                <Link to={`/admin/product/${product._id}/edit`} className='font-semibold text-gray-800 hover:text-blue-500'>{product.name}</Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    { product.num_products === 0 ?
                                                        (<td className='text-right pr-0'>
                                                            <div className="py-1 px-2 inline-block rounded-md bg-red-50 text-red-500 cursor-pointer whitespace-nowrap text-[0.67rem] font-semibold text-center"> Sold out </div>
                                                            <span className="ml-3 font-semibold text-sm text-red-500">{product.num_products}</span>
                                                        </td>)
                                                        : product.num_products < 10 ?
                                                        (<td className='text-right pr-0'>
                                                            <div className="py-1 px-2 inline-block rounded-md bg-yellow-50 text-yellow-500 cursor-pointer whitespace-nowrap text-[0.67rem] font-semibold text-center"> Low stock </div>
                                                            <span className="ml-3 font-semibold text-sm text-yellow-500">{product.num_products}</span>
                                                        </td>)
                                                        :
                                                        (<td className='text-right pr-0'>
                                                            <span className="font-semibold text-sm text-gray-500">{product.num_products}</span>
                                                        </td>)
                                                    }
                                                    <td className='text-right pr-0'>
                                                        <span className="font-semibold text-sm text-gray-500">&#8358;{product.price}</span>
                                                    </td>
                                                    <td className='text-right pr-0'>
                                                        <div className="py-1 px-2 inline-block align-baseline rounded-lg bg-green-100 text-green-600 cursor-pointer whitespace-nowrap text-xs text-center"> Published </div>
                                                    </td>
                                                    <td className='text-right pr-0'>
                                                        <ActionDropdown item={product} />
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

export default ProductList
