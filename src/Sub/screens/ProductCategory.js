import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listCategoryDetails } from '../../actions/product';
import Message from '../../Home/components/Message';
import Loader from '../components/Loader';
import Product from '../components/Product';
import ScreenContainer from './ScreenContainer';

function ProductCategory() {
    const { id } = useParams();
    const dispatch = useDispatch()
    
    const storeFront = useSelector(state => state.storeFront)
    const { store } = storeFront

    const categoryDetails = useSelector(state => state.categoryDetails)
    const { error, loading, category } = categoryDetails
    
    let requestedCat

    if (store) {
        requestedCat = store.store_categories.find((item) => item.name === id);
        console.log(requestedCat)
    }

    useEffect(() => {
        if(requestedCat){
            const storeId = requestedCat._id
            const catId = requestedCat.store
            dispatch(listCategoryDetails(storeId, catId))
        }

    }, [dispatch, requestedCat])

    return (
        <ScreenContainer>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='red'>{error}</Message>)
                    :(
                        <>
                        <h1 className='text-gray-800 font-medium text-lg mt-10 mb-4 leading-4'>{id}</h1>
                        <div className="grid grid-cols-12 gap-4">
                            {category.map(product => (
                                <div key={product._id} className="col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-3 shadow-gray-400">
                                    <Product product={product} />
                                </div>
                            ))}
                        </div>
                        </>
                    )
            }
        </ScreenContainer>
    )
}

export default ProductCategory