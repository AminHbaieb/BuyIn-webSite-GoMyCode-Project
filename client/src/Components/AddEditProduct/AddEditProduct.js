import React, { useState, useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Form } from 'react-bootstrap'
import './AddEditProduct.css'
import addBtn from '../../Assets/add.png'
import editBtn from '../../Assets/edit.png'
import { addProduct, editProduct } from '../../Redux/actions/ProductActions'



const AddEditProduct = ({history}) => { //an object inside route ex: rout(path:'') there's 3 autocreated object match,locationand history they're send as props to the component
   //store
   const dispatch=useDispatch()
   const edit =useSelector(state=>state.productReducer.isEdit)
   const itemReducer=useSelector(state=>state.productReducer.item)
   // state 
const [item, setItem] = useState({  imageUrl: "",name: " ", description: " ", price: 0 , quantity:0, totalPrice:0});
     // handleChange
    const handleChange=(e)=>{
        setItem({...item,[e.target.name]:e.target.value})
    }
    useEffect(() => {
     edit ? setItem(itemReducer):setItem({ imageUrl: " ",name:" ",description:" ",price:0, quantity:0, totalPrice:0})
    }, [edit,itemReducer])
 
    return (
        <Form className="my-form">
            {/* input imageUrl */}
            <Form.Group className="my-product-product">
                <Form.Control type="text"
                    placeholder="Enter product image Url ..."
                    name="imageUrl"
                    value={item && item.imageUrl}
                    onChange={handleChange}
                 />
                <Form.Text className="text-muted">Image Url is required !!</Form.Text>
            </Form.Group>
            {/* input name */}
            <Form.Group className="my-little-form">
                <Form.Control type="text"
                    placeholder="Enter product name ..."
                    name="name"
                    value={item && item.name}
                    onChange={handleChange}
                />
                <Form.Text className="text-muted">Name is required !!</Form.Text>
            </Form.Group>

            {/* input description */}
            <Form.Group >
                <Form.Control type="text"
                    placeholder="Enter product description ..."
                    name="description"
                    value={item && item.description}
                    onChange={handleChange}
                />
                <Form.Text className="text-muted">Description is required !!</Form.Text>
            </Form.Group>

            {/* input price */}
            <Form.Group >
                <Form.Control type="number"
                    placeholder="Enter product price ..."
                    name="price"
                    value={item && item.price}
                    onChange={handleChange}
                />
            </Form.Group>

            {/* add or edit button*/}
         {  edit ?  <img src={editBtn} alt="edit button" className="edit-btn" 
             onClick={()=>{dispatch(editProduct(itemReducer._id,item));history.push('/products')}}  /> :
              
                  <img src={addBtn} alt="add button" className="add-btn" 
               onClick={()=>{dispatch(addProduct(item));history.push('/products')}} />
                
          } 

        </Form>
    )
}

export default AddEditProduct