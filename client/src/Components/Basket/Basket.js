import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Basket.css";
import BasketCard from "../BasketCard/BasketCard";
import {useDispatch} from "react-redux"
import {addOrder} from "../../Redux/actions/order"

const ProductList = () => {
    const dispatch = useDispatch();

  const choosed = useSelector((state) => state.userReducer.isChoosing);
    const user = useSelector((state) => state.userReducer.user.email);

  //const total = useSelector((state) => state.orderReducer.total);
  const [total, setTotal] = useState(0);
  var quantity =[]
  var items =[]
  for (let i=0; i<= choosed.length;i++ ){
    if( choosed[i])
    // console.log(choosed[0].qte )
    // quantity= quantity + choosed[i].qte
     quantity.push(choosed[i].qte);
  }
  for (let j=0; j<= choosed.length;j++ ){
    if( choosed[j])
    // console.log(choosed[0].qte )
    // quantity= quantity + choosed[i].qte
     items.push(choosed[j].name);
  }
  if( user)
  console.log(user)

  // const [quantity,setQuantity] =useState(0);
//setQuantity()[choosed[0].qte,choosed[1].qte]
// console.log(choosed)
  return (
    <div className="products-content">
      <div className="total-price">Total Price of Items:{' '}{total}{' '}TND</div>
      
      <button className="btn btn-light btn-lg action-button" onClick={()=>dispatch(addOrder({user,total,items,quantity}))} >Purchase </button>
 
      <div className="products-list">
        {choosed &&
          choosed.map((el, i) => (
            <BasketCard
              product={el}
              key={i}
              total={total}
              setTotal={setTotal}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
