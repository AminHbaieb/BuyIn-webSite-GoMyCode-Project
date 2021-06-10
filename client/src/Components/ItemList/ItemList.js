import React from 'react'
import {useSelector} from 'react-redux'
import './ItemList.css'
import ShopCard from '../ShopCard/ShopCard'
 

const ProductList = () => {
const products=useSelector(state=>state.productReducer.products) 

    return (

      
            <div className="products-content">
                <div className="products-list">
                    {products.map(product=><ShopCard key={product._id} product={product}  />)}
                </div>
            </div>
    )
}

export default ProductList
