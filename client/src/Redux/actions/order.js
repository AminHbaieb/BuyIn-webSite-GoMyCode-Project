import {
  ADD_TOTAL,
  REMOVE_TOTAL,
  GET_ALL_ORDERS,
  GET_ORDER,
  ORDER_ADDED,
  ORDER_GET,
  ORDER_UPDATED,
  GERER_PANIER,
} from "../constants/order";
import axios from "axios";

export const getOrders = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/order");
    dispatch({ type: GET_ALL_ORDERS, payload: res.data.orders });
  } catch (error) {
    console.log(error);
  }
}
export const addOrder = (newOrder) => async (dispatch) => {
  try {
    await axios.post("/api/order", newOrder);
    dispatch(getOrders());
  } catch (error) {
    console.log(error);
  }
}


export const getOrder = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/order/${id}`);
    dispatch({ type: GET_ORDER, payload: res.data.order });
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/order/${id}`);
    dispatch(getOrders());
  } catch (error) {
    console.log(error);
  }
};

export const addOneOrder = (order) => async (dispatch) => {
  try {
    const res = await axios.post("/api/order", order);
    dispatch({ type: ORDER_ADDED, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const updateOneOrder = (id, order) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/order/${id}`, order);
    dispatch({ type: ORDER_UPDATED, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const getOneOrder = (userID) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/order/${userID}`);
    dispatch({ type: ORDER_GET, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const addTotal = (payload) => {
  return { type: ADD_TOTAL, payload };
};
export const removeTotal = (payload) => {
  return { type: REMOVE_TOTAL, payload };
};

export const gererPanier = (payload) => {
  return { type: GERER_PANIER, payload };
};
