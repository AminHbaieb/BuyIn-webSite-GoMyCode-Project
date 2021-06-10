import React from 'react'
import {useSelector} from 'react-redux'
import './OrderList.css'
import OrderCard from '../OrderCard/OrderCard'
 

const OrderList = () => {
const orders=useSelector(state=>state.orderReducer.orders) 
// console.log(orders)

    return (

      
            <div className="orders-content">
                <div className="orders-list">
                    {orders.map(order=><OrderCard key={order._id} order={order}  />)}
                </div>
            </div>
    )
}

export default OrderList
