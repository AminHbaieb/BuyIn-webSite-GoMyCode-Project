const mongoose=require('mongoose')
const schema=mongoose.Schema

const orderSchema=new schema({
    // userID:String,
    user:String,
    items: [],
    quantity:[],
    total:Number,

 })
module.exports=mongoose.model("Order",orderSchema)