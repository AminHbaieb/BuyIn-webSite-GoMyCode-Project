import {GET_ALL_PRODUCTS,TOGGLE_TRUE,TOGGLE_FALSE,GET_PRODUCT } from '../constants/ActionsTypes'
import axios from 'axios'

export const  getProducts=()=>async(dispatch)=>{
    try {
    const res=await axios.get("/api/products")
    dispatch({type:GET_ALL_PRODUCTS,payload:res.data.products})
    } catch (error) {
        console.log(error)
    }
}
export const addProduct=(newProduct)=>async(dispatch)=>{
    try {
      await  axios.post('/api/products',newProduct)
      dispatch(getProducts())
    } catch (error) {
        console.log(error)
    }
}
export const  editProduct=(id,newProduct)=>async(dispatch)=>{
    try {
        await axios.put(`/api/products/${id}`,newProduct)
        dispatch(getProducts())
    } catch (error) {
        console.log(error)
    }
}


export const deleteProduct=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/products/${id}`)
        dispatch(getProducts())
    } catch (error) {
        console.log(error)
    }
}

export const getProduct=(id)=>async(dispatch)=>{
try {
    const res=await axios.get(`/api/products/${id}`)
    dispatch({type:GET_PRODUCT,payload:res.data.product})
} catch (error) {
    console.log(error)
}
}
export const toggleTrue=()=>{
    return {
        type:TOGGLE_TRUE
    }
}
export const toggleFalse=()=>{
    return {
        type:TOGGLE_FALSE
    }
}
 
