import {GET_ALL_PRODUCTS, GET_PRODUCT, TOGGLE_FALSE, TOGGLE_TRUE} from "../constants/ActionsTypes"


const initState={
    products:[],
    isEdit:false,
    item:{ imageUrl: " ", name: " ", description: " ", price: 0 }
}

function productReducer(state=initState,{type,payload}){
switch(type){
    case GET_ALL_PRODUCTS:
        return {...state,products:payload}//payload witch is res.data.products
    case TOGGLE_TRUE:
        return {...state,isEdit:true}
    case TOGGLE_FALSE:
        return {...state,isEdit:false}
    case GET_PRODUCT:
        return {...state,item:payload}
        
    default:
        return state

}
}

export default productReducer