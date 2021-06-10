import axios from "axios";
import {
  LOAD_USER,
  REGISTER_USER,
  FAIL_USER,
  LOGIN_USER,
  CURRENT_USER,
  LOGOUT_USER,
  TOGGLE_CHOOSE,
  GET_USERS,
  DELETE_CHOOSED
} from "../constants/user";


export const  getUsers=()=>async(dispatch)=>{
    try {
    const res=await axios.get("/api/user/")//{res.data:msg,users}
        // console.log(res.data.users)

    dispatch({type:GET_USERS,payload:res.data.users})
    } catch (error) {
        console.log(error)
    }
}
export const register = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("/api/user/register", user);
    //succees action
    dispatch({ type: REGISTER_USER, payload: result.data }); //{msg,user,token}
    if(user.role=="admin"){
      history.push("/profile");
    }else{
      history.push("/addItem");
    }
  } catch (error) {
    // fail
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const login = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data }); //{msg,token,user}
       if(result.data.user.role=="Admin"){
      history.push("/profile");
    }else{
      history.push("/addItem");
    }
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const current = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data }); //{msg , user}
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

// logout
export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};
// delete user

export const deleteUser=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/user/${id}`)
        dispatch(getUsers())
    } catch (error) {
        console.log(error)
    }
}

// Errors
export const videErrors = () => {
  return {
    type: "VIDE_ERRORS",
  };
};
// toggleItemChoose
export const toggleChoose = (payload) => {
  return {
    type: TOGGLE_CHOOSE,
    payload: payload
  };
};
export const deleteChoosed = (payload) => {
  return {
    type: DELETE_CHOOSED,
    payload: payload
  };
};
 
 
