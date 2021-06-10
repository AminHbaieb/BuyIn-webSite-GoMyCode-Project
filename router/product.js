const express=require('express')
const router=express.Router()
 const Product=require('../models/Product')


//@desc add new modle "Product"
//@method post
//@req.body
router.post('/',async(req,res)=>{
    try {
        const {imageUrl,name,description,price}=req.body
if(!imageUrl||!name||!description){
    return res.status(400).send("image Url, name and description are required")
}
        const product= new Product({
          imageUrl,name,description,price,  quantity, totalPrice
        })
        await product.save()
        res.status(200).send({msg:"product added",product})
    } 
    catch (error) {
        res.status(500).send("impossible to add product")
    }
})
//@desc get 1 product
//@method get
router.get('/:Id',async(req,res)=>{
try {
    const {Id}=req.params
    const product = await Product.findOne({_id:Id})
    res.status(200).send({msg:"product",product})
} catch (error) {
    res.status(500).send("impossible to products")
}
})
//@desc all products
//@method get
router.get('/',async(req,res)=>{
    try {
        const products=await Product.find()
        res.status(200).send({msg:"all products",products})
    } catch (error) {
        res.status(500).send("impossible to get products")
    }
})

//@desc update product
//@method put
//@req.body
//@req.params

router.put("/:Id",async(req,res)=>{
 try {
    const {Id}=req.params
    //   const id=req.params.Id
    const product=await Product.findOneAndUpdate({_id:Id},{$set:{...req.body}})
    res.status(200).send({msg:"product edited",product})
 } catch (error) {
    res.status(500).send("impossible to edited products")
 }
})
//@desc delete product
//@method delete
//@req.params
router.delete('/:Id',async(req,res)=>{
    try {
        const {Id}=req.params
        const product=await Product.findByIdAndDelete(Id)
        res.status(200).send({msg:"product deleted",product})
    } catch (error) {
        res.status(500).send("impossible to deleted products")
    }
})

module.exports=router