import React from "react"
import {useDispatch} from 'react-redux'
import {Link} from "react-router-dom"
import './Shop.css'
import {getProducts} from '../../Redux/actions/ProductActions'
import {getOrders} from '../../Redux/actions/order'




const Store = () => {

const dispatch = useDispatch()

    return (
        <div>
            {/* Product list button */}
           
                <Link to='/items'>
                <button className="app-btn" onClick={()=>dispatch(getProducts())}>Items List</button>
                </Link>
           

            {/* add product button */}
           
                <Link to="/basket">
                <button className="app-btn" onClick={()=>dispatch(getOrders())} >My basket</button>
                </Link>
               
           
        </div >
    )
}

export default Store
