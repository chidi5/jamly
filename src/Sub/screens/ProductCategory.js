import React from 'react'
import { useParams } from 'react-router-dom';
import ScreenContainer from './ScreenContainer';

function ProductCategory() {
    const { id } = useParams();

    return (
        <ScreenContainer>
            <div>ProductCategory {id}</div>
        </ScreenContainer>
    )
}

export default ProductCategory