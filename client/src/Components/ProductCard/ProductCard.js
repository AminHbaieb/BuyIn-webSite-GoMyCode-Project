import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {deleteProduct,getProduct,toggleTrue} from '../../Redux/actions/ProductActions'
import './ProductCard.css'
import editBtn from '../../Assets/edit.png'
// import image from '../../Assets/image.png'
import deleteBtn from '../../Assets/delete.png'

 

const ProductCard = ({product}) => {
const dispatch=useDispatch()

    return (
        <div className="product-card">
             
            <img className="imageCard" src={product.imageUrl} alt="image"/>
             
            <h3>{product.name}</h3>
            <span>{product.description}</span>
            <span>{product.price}</span>
            <div className="delete-edit-btns">
                <img src={deleteBtn}
                    alt="delete-icon"
                   onClick={()=>dispatch(deleteProduct(product._id))}
                />
                    <Link to='/editProduct'>
                   <img src={editBtn}
                        alt="edit-icon"
                        onClick={()=>{dispatch(toggleTrue());dispatch(getProduct(product._id))}}
                    />
                   </Link>
                
            </div>
        </div>
    )
}

export default ProductCard