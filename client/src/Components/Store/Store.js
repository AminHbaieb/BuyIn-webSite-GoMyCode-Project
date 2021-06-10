import React from "react"
import {useDispatch} from 'react-redux'
import {Link} from "react-router-dom"
import './Store.css'
import {getProducts, toggleFalse} from '../../Redux/actions/ProductActions'
import { getUsers } from "../../Redux/actions/user"
import {getOrders} from "../../Redux/actions/order"



const Store = () => {

const dispatch = useDispatch()

    return (
        <div>
            {/* Products list button */}
           
                <Link to='/products'>
                <button className="app-btn" onClick={()=>dispatch(getProducts())}>Product List</button>
                </Link>
           

            {/* add product button */}
           
                <Link to="/addProduct">
                <button className="app-btn" onClick={()=>dispatch(toggleFalse())} >Add Product</button>
                </Link>

             {/* consult users button */}
           
                <Link to="/users">
                <button className="app-btn" onClick={()=>dispatch(getUsers())} >Users list</button>
                </Link>
            
                {/* consult orders button */}
           
                <Link to="/usersCommande">
                <button className="app-btn" onClick={()=>dispatch(getOrders())} >Commandes</button>
                </Link>
           
        </div >
    )
}

export default Store
