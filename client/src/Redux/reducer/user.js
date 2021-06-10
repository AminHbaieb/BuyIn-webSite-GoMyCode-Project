// import types

import { GERER_PANIER } from "../constants/order";

const {
  REGISTER_USER,
  LOGIN_USER,
  FAIL_USER,
  LOAD_USER,
  CURRENT_USER,
  LOGOUT_USER,
  TOGGLE_CHOOSE,
  GET_USERS,
    DELETE_CHOOSED

} = require("../constants/user");

// initialstate
const initialState = {
  users:[],
  user: {},
  errors: [],
  isAuth: false,
  load: false,
  isChoosing:[] 
}
// pure function=> (state, {type,payload})=>
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {...state, users:payload }//payload witch is res.data.users
    case LOAD_USER:
      return { ...state, load: true };
    //   payload:{token , msg , user }
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user, load: false, isAuth: true };
    //   payload: {token , msg , user}
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user, load: false, isAuth: true };
    case FAIL_USER:
      return { ...state, errors: payload, load: false };
    case CURRENT_USER:
      return { ...state, user: payload.user, isAuth: true };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return { ...state, user: {}, isAuth: false };
    case "VIDE_ERRORS":
      return { ...state, errors: [] };
    case TOGGLE_CHOOSE:
         return {...state,isChoosing: [...state.isChoosing, payload]} 
   case GERER_PANIER:
         return {...state,isChoosing: state.isChoosing.map(el=>el._id==payload.id? {...el, qte: payload.qte}: el)}
   case  DELETE_CHOOSED:
        //  return {...state,isChoosing: state.isChoosing.map(el=>el._id==payload.id? delete(el): el)}
        return {...state,isChoosing: state.isChoosing.map((el) => el.id !== payload? {...el, qte: 0}: el)}

    default:
      return state;
      
  }   
 
};

export default userReducer;
