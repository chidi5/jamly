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


    useEffect(() => {
        let requestedCat

        if (store) {
            requestedCat = store.store_categories.find((item) => item.name === id);
            //console.log(requestedCat)
            if(requestedCat){
                const storeId = requestedCat.store
                const catId = requestedCat._id
                dispatch(listCategoryDetails(storeId, catId))
            }
        }

        document.body.style.backgroundColor= '#ffffff'
        return() => {
            document.body.style.backgroundColor= '#f1f5f9'
        }

    }, [dispatch, store, id])

    return (
        <ScreenContainer className='font-loader'>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='red'>{error}</Message>)
                    :category && (
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