import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Errors from "./Pages/Errors/Errors";
import Landpage from "./Pages/Landpage/Landpage";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Store from "./Pages/Store/Store";
import Register from "./Pages/Register/Register";
import {Switch,Route} from 'react-router-dom'
import PrivateRoute from "./router/PrivateRoute";
import React,{ useEffect } from "react";//I added React for :'React' must be in scope when using JSX react/react-in-jsx-scope
import { useDispatch } from "react-redux";
import { current } from "./Redux/actions/user";
//import React, { Landpage,Register,Login,Profile,Errors}  from 'react' //I added this for :'React' must be in scope when using JSX react/react-in-jsx-scope

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);
  return (
     <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landpage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/(profile|products|addProduct|editProduct|users|usersCommande)" component={Profile} />
        <PrivateRoute path="/(addItem|items|basket)" component={Store} />
        <Route path="/*" component={Errors} />
      </Switch>
    </div>
   );
}

export default App;
