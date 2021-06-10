const mongoose=require('mongoose')
const schema=mongoose.Schema

const productSchema=new schema({
    imageUrl: {type:String,required:true},
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:Number,
    quantity:Number, 
    totalPrice:Number
})
module.exports=mongoose.model("Product",productSchema)