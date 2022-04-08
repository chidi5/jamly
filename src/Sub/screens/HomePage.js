import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../../Home/components/Message'
import ScreenContainer from './ScreenContainer';
import { loadStore } from '../../actions/storefront'

function HomePage({subDomain}) {

    const dispatch = useDispatch()

    const storeFront = useSelector(state => state.storeFront)
    const { error, loading, store } = storeFront

    useEffect(() => {
        dispatch(loadStore(subDomain))

        document.body.style.backgroundColor= '#ffffff'
        return() => {
            document.body.style.backgroundColor= '#f1f5f9'
        }

    }, [dispatch, subDomain])


    //const requestedUser = users.find((user) => user.username === subDomain);

    return (
        <div className='font-loader'>
            {loading ? <Loader />
                : error ? <Message variant ='red'>{error}</Message>
                : store &&
                <div>
                    <div className='bg-pink-600 min-h-[400px] w-full'>
                        <div className='absolute'>
                            <div className='bg-white w-72 h-72 ml-10 md:ml-40 my-14'>
                                <div className='p-7'>
                                    <h1 className='text-gray-800 text-3xl font-bold'>{`Welcome to ${store.store_data.name}`}</h1>
                                    <p className='mt-5 mb-5'>Get up to 20% of our clothes this period. Use code: Harmattan</p>
                                    <Link to='' className='text-xs text-indigo-500 hover:text-indigo-700'>SHOP NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ScreenContainer>
                        <h1 className='text-gray-800 font-medium text-lg mt-10 mb-4 leading-4'>New Arrivals</h1>
                            <div className="grid grid-cols-12 gap-4">
                                {store.store_products.map(product => (
                                    <div key={product._id} className="col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-3 shadow-gray-400">
                                        <Product product={product} />
                                    </div>
                                ))}
                            </div>
                    </ScreenContainer>
                    
                </div>
            }
        </div>
    )
}

export default HomePage
