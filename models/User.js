const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: Number,
  userImageUrl:{type:String},

  //deffrence between user and Admin
  role:{ type: String,  default:"User" },

});

module.exports = User = model("user", userSchema);
