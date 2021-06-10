console.clear();
// import multer
// const multer = require('multer')

// import express
const express = require("express");
const connectDB = require("./config/connectDB");
// instance app
const app = express();
// //multer
// const fileStorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null,'./images');
//   },
//   filename: (req,file,cb)=>{
//     cb(null, Date.now() + '--' + file.originalname)
//   }
// }),
// const upload = multer({storage: fileStorageEngine});

// app.post("./single", upload.single("image"),(req,
//   res)=>{
//     console.log(req.file);
//     res.send("upload sucess");
//   })
// //
require("dotenv").config();

connectDB();

// router
// user
app.use(express.json());
app.use("/api/user", require("./router/user"));
// router
// product
app.use("/api/products", require("./router/product"));
// router
// product
app.use("/api/order", require("./router/order"));

// PORT
const PORT = process.env.PORT;

// create server
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on PORT ${PORT}`)
);
