import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
 import './ShopCard.css'
import additemBtn from '../../Assets/add.png'
import {useSelector} from 'react-redux'
import {toggleChoose} from '../../Redux/actions/user'

    

const ProductCard = ({product}) => {
const dispatch=useDispatch()

// ,useSelector
// const edi =useSelector(state=>state.user.isChoosing)
//  const user=useSelector(state=>state.user.user)

// console.log(user)

    return (
        <div className="product-card">
             
            <img className="itemImage" src={product.imageUrl} alt="image"/>
             
            <h3>{product.name}</h3>
            <span>{product.description}</span>
            <span>{product.price}</span>
            <div className="add-item-btn">
                
                    <Link to='/basket'>
                   <img 
                   src={additemBtn }
                        alt="additem-icon"
                        onClick={()=>{dispatch(toggleChoose(product))}}// dispatch(getProduct(product._id))
                    />
                   </Link>
                
            </div>
        </div>
    )
}

export default ProductCard


