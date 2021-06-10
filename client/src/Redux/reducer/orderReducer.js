import {
  GET_ALL_ORDERS,
  GET_ORDER,
  ORDER_ADDED,
  ORDER_GET,
  ORDER_UPDATED,
  ADD_TOTAL,
  REMOVE_TOTAL,
} from "../constants/order";

const initState = {
  orders: [],
  order: {},
  total: 0,
  msg: null,
};

function orderReducer(state = initState, { type, payload }) {
  const { total } = initState;
  switch (type) {
    case GET_ALL_ORDERS:
      return { ...state, orders: payload }; //payload witch is res.data.oreders

    case GET_ORDER:
      return { ...state, order: payload };
    case ORDER_ADDED:
      return {
        ...state,
        order: payload.order,
        msg: payload.msg,
      };
    case ORDER_UPDATED:
      return {
        ...state,
        order: payload.order,
        msg: payload.msg,
      };
    case ORDER_GET:
      return {
        ...state,
        order: payload.order,
        msg: payload.msg,
      };

    case ADD_TOTAL:
      return { ...state, total: total + payload };    
     
    case REMOVE_TOTAL:
      return { ...state, total: total - payload };

    default:
      return state;
  }
}

export default orderReducer;
