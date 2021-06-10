import React, { useEffect } from "react";
import "./Landpage.css";
import ItemList from "../../Components/ItemList/ItemList"
import VisitorCard from "../../Components/VisitorCard/VisitorCard"
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from "../../Redux/actions/ProductActions";
import { Link } from "react-router-dom";


const LandPage = () => {
  const dispatch=useDispatch()
  useEffect(() => {
   dispatch(getProducts())
  }, [dispatch])
 const products=useSelector(state=>state.productReducer.products) 
   return (
    <div className="landpage">
      <div className="header-blue">
          <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
              
          </nav>
            <div className="container hero">
                <div className="row">
                        <div className="col-12 col-lg-1 col-xl-5 offset-l-1">
                        <h1>The aim is to ease business</h1>
                        <p className="paragraph">Been born between many families who were interested in making industrial and
                            Electro-technical equipment, but never been succeeding business that much or
                            They were applying a classic marketing and supplying strategies. BuyIn the solution now for you, It is a public
                            website where customers can find unique products that we present for them, they have
                            access to an e-commerce section where they can buy equipment.
                            </p> <button className="btn btn-light btn-lg action-button" type="button">Learn More<i className="fa fa-long-arrow-right ml-2"/></button>
                        </div>
                        <div className="col-md-10 col-lg-3 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                        <div className="iphone-mockup"> <img className="device" src="https://i.imgur.com/bkCeTu7.png"/> 
                        </div>
                        </div>
                        

                        <div className="col">
                          <Link className="SC" to="/register">   

                      {products.map(product=><VisitorCard  key={product._id} product={product}  />)}
                          </Link>
                        </div>
                        
                </div>
            </div>
{/* <div className="product-list">
                          </div> */}
      </div>
    </div>
  );
};

export default LandPage;
