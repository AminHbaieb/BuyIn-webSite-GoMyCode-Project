const express=require('express')
const router=express.Router()
const Order=require('../models/Order')


//@desc add new modle "Order"
//@method post
//@req.body
router.post('/',async(req,res)=>{
    try {
        const order= new Order(req.body)
        await order.save()
        res.status(200).send({msg:"order added",order})
    } 
    catch (error) {
        res.status(500).send("impossible to add order")
    }
})
router.put("/:id",async(req,res)=>{
    try {
        const {id} = req.params
        const order= await Order.findOneAndUpdate({_id:id},{$set:{...req.body}})
       
        res.status(200).send({msg:"order updated",order})
    } 
    catch (error) {
        res.status(500).send("impossible to update order")
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const order = await Order.find({userID:id})
        res.status(200).send({msg:"order added",order})
    } 
    catch (error) {
        res.status(500).send("impossible to add order")
    }
})



//@desc get 1 oder
//@method get
router.get('/:Id',async(req,res)=>{
try {
    const {Id}=req.params
    const order = await order.findOne({_id:Id})
    res.status(200).send({msg:"order",order})
} catch (error) {
    res.status(500).send("impossible to order")
}
})
//@desc all orders
//@method get
router.get('/',async(req,res)=>{
    try {
        const orders=await Order.find()
        res.status(200).send({msg:"all oreders",orders})
    } catch (error) {
        res.status(500).send("impossible to get oreders")
    }
})


//@desc delete order
//@method delete
//@req.params
router.delete('/:Id',async(req,res)=>{
    try {
        const {Id}=req.params
        const order=await order.findByIdAndDelete(Id)
        res.status(200).send({msg:"order deleted",oreder})
    } catch (error) {
        res.status(500).send("impossible to deleted order")
    }
})

module.exports=router