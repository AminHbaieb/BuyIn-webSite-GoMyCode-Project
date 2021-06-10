


import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from './productReducer'
import orderReducer from './orderReducer'

const rootReducer = combineReducers({ userReducer ,productReducer,orderReducer});
export default rootReducer;
