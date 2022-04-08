import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ScreenContainer from './ScreenContainer';

function ProductCategory() {
    const { id } = useParams();
    
    const storeFront = useSelector(state => state.storeFront)
    const { store } = storeFront

    return (
        <ScreenContainer>
            <div>ProductCategory {id}</div>
            {store.store_categories.map(item => (
                <>
                    {item.name === id && <div> {item._id} </div>}
                </>
            ))}
        </ScreenContainer>
    )
}

export default ProductCategory