import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { loadStore } from '../../actions/storefront'
import ScreenContainer from './ScreenContainer'
import Cart from '../partials/header/Cart'
import { listProductDetails } from '../../actions/product'
import { STORE_SUCCESS } from '../../actions/types'

function ProductScreen({subDomain}) {

    const [qty, setQty] = useState(1)
    const [open, setOpen] = useState(false)
    const [addCart, setAddCart] = useState(false)

    const dispatch = useDispatch()
    const { id } = useParams();

    const storeFront = useSelector(state => state.storeFront)
    const { store } = storeFront

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(loadStore(subDomain))

        if({ type: STORE_SUCCESS }) {
            dispatch(listProductDetails(id))
        }

        document.body.style.backgroundColor= '#ffffff'
        return() => {
            document.body.style.backgroundColor= 'none'
        }

    }, [dispatch, subDomain, id])

    const addToCartHandler = () => {
        //history.push(`/cart/${match.params.id}?qty=${qty}`)
        console.log('qty:' + qty)
    }

  return (
    <ScreenContainer>
        {product &&
            <Fragment>
                <div className="grid grid-cols-12 gap-7 xl:gap-10 xl:px-48 font-loader">
                    <div className='col-span-12 md:col-span-8 xl:col-span-7 gap-7 xl:gap-10'>
                        <div className='relative mb-3 overflow-hidden'>
                            <img src={product.image} className='w-full' alt={product.name}></img>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 xl:col-span-5 mb-7 xl:mr-1 gap-7 xl:gap-10 xl:pt-6">
                        <div className="relative">
                            {/* Header */}
                            <div className='py-0 gap-2 md:gap-5'>
                                {/* title */}
                                <div className='ml-0 text-xl font-light leading-8 text-gray-800'>
                                    <h2>{product.name}</h2>
                                </div>
                                <div className='ml-0 mt-3 text-xl font-medium text-gray-500'>
                                    <h2>&#8358;{product.price}</h2>
                                </div>
                                <div className='ml-0 mt-3 text-base'>
                                    <h2>Rating</h2>
                                </div>
                                {product.options && product.product_options &&
                                    <div className='ml-0 mt-3 text-base'>
                                            {product.product_options.map(item => (
                                                <Fragment>
                                                    <label className='uppercase text-base text-gray-900'>
                                                        {item.name}
                                                    </label>
                                                    <select
                                                    key={item._id}
                                                    name={item.name}
                                                    className="border-gray-800 px-4 mt-2 font-normal text-gray-800 text-base border-solid appearance-none focus:ring-transparent focus:border-gray-800 block w-full focus:outline-none"
                                                    >       
                                                        {item.product_options_values.map(it => (
                                                            <option key={it._id} value={it.value}>{it.value}</option>
                                                        ))}
                                                    </select>
                                                </Fragment>
                                            ))}
                                    </div>
                                }
                                {product.num_products > 0 && (
                                    <div className='ml-0 mt-3 text-base'>
                                        <label className='text-base text-gray-900'>
                                            QTY
                                        </label>
                                        <select
                                        value={qty}
                                        className="border-gray-800 px-4 mt-2 font-normal text-gray-800 text-base border-solid appearance-none focus:ring-transparent focus:border-gray-800 block w-full focus:outline-none"
                                        onChange={(e) => setQty(e.target.value)}
                                        >       
                                            {
                                                [...Array(product.num_products).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                )}
                                <button
                                className="mt-5 btn bg-teal-950 hover:bg-teal-951 text-white uppercase rounded-none xl:w-1/2"
                                onClick={() => {setOpen(!open); setAddCart(!addCart)}}
                                disabled={product.num_products === 0}
                                >
                                    <span>Add To Cart</span>
                                </button>
                                <Cart open={open} setOpen={setOpen} addCart={addCart} qty={qty} id={id} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-7 font-loader'>
                    <h1 className='uppercase text-gray-500 font-medium text-sm'>Product Details</h1>
                    <p className='text-sm'>{product.description}</p>
                </div>
                <div className='mt-7 font-loader xl:w-1/2'>
                    <h1 className='uppercase text-gray-500 font-medium text-sm'>Reviews</h1>
                    {product.product_reviews.length !== 0 ?
                        <div className='ml-5 mt-3'>
                            {product.product_reviews.map(item => (
                                <div className='pb-8 border-b border-gray-400'>
                                    <h1>User: {item.user.first_name} {item.user.last_name}</h1>
                                    <h1>Rating: {item.rating}</h1>
                                    <p>{item.created_at.substring(0, 10)}</p>
                                    <p className="mt-3">{item.description}</p>
                                </div>
                            ))}
                        </div> 
                        :
                        <h1 className='text-xl mt-3 pb-5 border-b border-gray-400'>No Reviews</h1>
                    }
                    <form className='md:ml-5'>
                        <h1 className='text-xl mt-5 mb-3 uppercase'>Write Review</h1>
                        <label className='text-sm font-normal text-gray-500'>Rating</label>
                        <select
                        className="bg-gray-100 border-gray-100 px-4 mt-2 font-medium text-base border-solid rounded-none appearance-none focus:ring-transparent focus:border-transparent block w-full focus:outline-none"
                        >
                            <option value=''>Select...</option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                        </select>
                        <label className='mb-2 text-sm font-normal text-gray-500'>
                            Review
                        </label>
                        <textarea rows={5} cols={60} name="product_description" className="block border rounded-none bg-gray-100 border-gray-100 appearance-none focus:ring-transparent focus:border-transparent focus:outline-none text-sm text-gray-500 font-medium px-4 w-full my-2" placeholder="Enter text here..."/>
                        <button className="mt-3 btn bg-teal-950 hover:bg-teal-951 text-white uppercase rounded-none">
                            <span>Submit</span>
                        </button>
                    </form>
                    
                </div>
            </Fragment>
        }
    </ScreenContainer>
  )
}

export default ProductScreen