import React from "react";
import { useSelector } from "react-redux";
import "./Store.css";

import Shop from "../../Components/Shop/Shop";
import ItemList from "../../Components/ItemList/ItemList";
import Basket from "../../Components/Basket/Basket";
import {Switch,Route} from 'react-router-dom'



const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div className="user-profile">
      <div className="row">
        <div className="col-lg-7 mx-auto text-white text-center pt-5"></div>
      </div>
      {/* End */}
      <div className="row">
        <div className="col-xl-8 col-md-6 col-sm-10 mx-auto">
          {/* Profile widget */}
           <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 bg-dark">
              <div className="media align-items-end profile-header">
                <div className="profile mr-3"></div>
                  
                
                <div className="media-body mb-5 text-white">

                  <img
                    src={user.userImageUrl}
                    alt="..."
                    width={130}
                    className="rounded mb-2 img-thumbnail"
                  />
                  <div className="row-space"></div>
                  <div className="row-details">
                  <h3 className="mt-0 mb-0">{user && user.name}</h3>
                  <h4 className="small mb-4">
                    {" "}
                    <i className="fa fa-map-marker mr-2" />
                    {user && user.email}
                  </h4>{" "}
                  <h4 className="small mb-4">
                    {" "}
                    <i class="fas fa-phone"></i>
                    {user && user.phone}
                  </h4>
                  </div>
                </div>
              </div>
            </div> 
             <div className="bg-light p-4 d-flex justify-content-end text-center">
               
            </div>
             
          </div>  
           <div className="Products-section">
     <div className="App">
     <Shop/>
     <Switch>
     <Route path="/items" component={ItemList}/>
     <Route path="/basket" component={Basket}/>
     </Switch>
     </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
