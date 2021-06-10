import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
 import './OrderCard.css'
import additemBtn from '../../Assets/add.png'
import {useSelector} from 'react-redux'
import {toggleChoose} from '../../Redux/actions/user'

    

const OrderCard = ({order}) => {
const dispatch=useDispatch()


// const items=order.items
// const qtes=order.quantity
// var tab =[]
// for (let j=0; j<= tab.length;j++ ){
//     if( tab[j]){
//      tab.push(items[j]&&qtes[j]);
//  if(items)
//  console.log(items[j])
//     }
//   }
    return (
        <div className="order-card">
             
            {/* <img className="itemImage" src={order.imageUrl} alt="image"/> */}
{/*       
            <h3 className="item-tab">{order.items}<span></span></h3>
            <h4 className="item-tab">{order.quantity}<span></span></h4>
            
              */}
              <div>

              <div className="grid" >

              {order.items.map(item=><h4>{item}</h4>)}
              </div>
              <div className="grid" >
              {order.quantity.map(item=><h4>{item}</h4>)}
              </div>
              </div>

            <h3>{order.user}</h3>
            <h4>{order.total}</h4>
            {/* <span>{order.price}</span> */}
            <div className="add-item-btn">
                
                    {/* <Link to='/basket'>
                   <img 
                   src={additemBtn }
                        alt="additem-icon"
                        onClick={()=>{dispatch(toggleChoose(order))}}// dispatch(getOrder(order._id))
                    />
                   </Link> */}
                
            </div>
        </div>
    )
}

export default OrderCard


