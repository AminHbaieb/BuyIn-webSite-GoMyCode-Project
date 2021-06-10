const User = require("../models/User");
const jwt = require("jsonwebtoken");
const isAuth = async (req, res, next) => {
  try {
    // import token
    const token = req.headers["authorization"];
    //   check if it exist
    if (!token) {
      return res
        .status(401)
        .send({ errors: [{ msg: "you are not authorized12" }] });
    }
    // else check if the token is valid
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // test if the user exist with that id
    const user = await User.findOne({ _id: decoded.id }).select("-password");
    // you are not authorised
    if (!user) {
      return res
        .status(401)
        .send({ errors: [{ msg: "you are not authorized2" }] });
    }
    // else
     req.user = user;
    // next
    next();
  } 
  catch (error) {
    console.log(error)
    res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
  }
};

module.exports = isAuth;
