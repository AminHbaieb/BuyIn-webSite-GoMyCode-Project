import React from 'react'
import {useSelector} from 'react-redux'
import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard'
 

const ProductList = () => {
const products=useSelector(state=>state.productReducer.products) 
//  console.log(products);

    return (

      
            <div className="products-content">
                <div className="products-list">
                    {products.map(product=><ProductCard product={product} key={product._id} />)}
                </div>
            </div>
    )
}

export default ProductList
