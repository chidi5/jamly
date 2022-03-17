import React from 'react'
import { Link } from 'react-router-dom'

function Product({ product }) {

    return (
        <Link to={`/product/${product._id}`} className='mb-7'>
            <div className='relative mb-3 overflow-hidden min-h-max h-60 md:h-72 xl:h-96 bg-cover bg-no-repeat bg-center' style={{backgroundImage:`url(${product.image})`}}></div>
            <div>
                <h3 className="text-gray-800 mb-3">{product.name}</h3>
                <h4 className="hidden relative text-red-700 mr-3 px-1 opacity-90 after:absolute after:left-0 after:h-[1px] after:w-full after:bg-red-700 after:top-1/2">&#8358;79.99</h4>
                <h4 className="inline-block font-medium">&#8358;{product.price}</h4>
            </div>
        </Link>
    )
}

export default Product