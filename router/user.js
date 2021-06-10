const express = require("express");
const { Register, Login } = require("../controllers/user.controllers");
const isAuth = require("../middleware/isAuth");
const {
  validation,
  registerValidate,
  loginValidate,
} = require("../middleware/validateUser");
const User = require("../models/User");

const router = express.Router();

//@desc all users
//@method get
router.get('/',async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).send({msg:"all users",users})
    } catch (error) {
        res.status(500).send("impossible to get users")
    }
})
/*
@method: POST
@ path:http:localhost:5000/api/user/register
@ parameter: req.body  
public
*/
router.post("/register", registerValidate(), validation, Register);

/*
@method: POST
@ path:http:localhost:5000/api/user/login
@ parameter: req.body  
public
*/
router.post("/login", loginValidate(), validation, Login);

/*
@method: GET
@ path:http:localhost:5000/api/user/current
@ parameter: req.headers  
public
*/
router.get("/current", isAuth, (req, res) => {
  res.send({ msg: "authorized", user: req.user });
});

// default export
module.exports = router;

//@desc delete user
//@method delete
//@req.params

router.delete('/:Id',async(req,res)=>{
   try {
     const {Id}=req.params
     const user=await User.findByIdAndDelete(Id)
     res.status(200).send({msg:"user deleted", user})
   } catch (error) {
     res.status(500).send("impossile to delete user")
   }
})