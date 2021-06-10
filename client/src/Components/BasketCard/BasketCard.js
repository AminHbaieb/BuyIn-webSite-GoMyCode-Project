import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../Redux/actions/ProductActions";
import "./BasketCard.css";
import deleteitemBtn from "../../Assets/delete.png";
import { getProduct,editProduct } from "../../Redux/actions/ProductActions";
import { gererPanier} from "../../Redux/actions/order";
import { deleteChoosed} from "../../Redux/actions/user";

const ProductCard = ({ product, total, setTotal }) => {
  //const { total } = useSelector((state) => state.orderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(product._id));
  }, []);
  // ,useSelector
  // const edi =useSelector(state=>state.user.isChoosing)
  // console.log(edi)
  // state
  const [quan, setQuan] = useState(0);

  const handleMinus = () => {
    setQuan(quan > 0 ? quan - 1 : 0);
    if (quan > 0){
    setTotal(total - product.price);
    // product.quantity=quan
    // dispatch(editProduct(product._id,product.quantity)) 
        dispatch(gererPanier({id:product._id, qte:quan-1}))
    }
  };

  const handlePlus = () => {
    setQuan(quan + 1);
        dispatch(gererPanier({id:product._id, qte:quan+1}))

    setTotal(total + product.price);
    // product.quantity=quan
        // dispatch(editProduct(product._id,product.quantity)) 


  };

  return (
    <div className="product-card">
      <img className="basketImage" src={product.imageUrl} alt="image" />

      <h3>{product.name}</h3>
      <h6>
        <span>{product.description}</span>
      </h6>
      <h5>
        <span>{product.price}</span>
      </h5>
      <div>
        <button className="minus-btn" onClick={handleMinus}>
          -
        </button>{" "}
        <span>{quan}</span>{" "}
        <button className="minus-btn" onClick={handlePlus}>
          +
        </button>
      </div>
      <span>{quan * product.price}</span>

      <div className="delete-btn">
       </div>
    </div>
  );
};

export default ProductCard;
