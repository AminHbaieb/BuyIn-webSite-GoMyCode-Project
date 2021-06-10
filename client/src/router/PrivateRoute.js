import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(state => state.userReducer.user)
  const token = localStorage.getItem("token"); 
  if (token) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/" />;
};

export default PrivateRoute;
