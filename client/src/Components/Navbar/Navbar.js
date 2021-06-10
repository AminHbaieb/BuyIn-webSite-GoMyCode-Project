import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Redux/actions/user";

import "./Navbar.css";
const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  return (
    <header>
      <h2>
        {/* <i className="icon-plane" /> */}
        {/* <Link to="/">Authentification</Link> */}
      </h2>
      <nav>
        <ul>
          {/* <li>Hotels</li>

          <li>Flights</li> */}

          <ul className="ul_auth">
            {isAuth ? (
              <ul>
                <Link to="/">
                  {" "}
                  {/* <li className="auth" onClick={() => dispatch(logout())}> */}
                    <button className="btn btn-light btn-lg action-button" onClick={() => dispatch(logout())} type="button">Log out<i className="fa fa-long-arrow-right ml-2"/></button>
                    
                </Link>
              </ul>
            ) : (
              <ul>
                {" "}
                <Link to="/register">
                  {" "}
                   <button className="btn btn-light btn-lg action-button"   type="button">Register<i className="fa fa-long-arrow-right ml-2"/></button>

                </Link>
              <div className="action-button-sp">{" "}</div>
              
                <Link to="/login">
                  {" "}
                  <button className="btn btn-light btn-lg action-button1"   type="button">Log in<i className="fa fa-long-arrow-right ml-2"/></button>

                </Link>
              </ul>
            )}
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
