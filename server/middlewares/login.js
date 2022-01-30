const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  console.log(req.headers);
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "You must log in" });
  }
  const token = authorization.replace("Bearer ", "");
  console.log(token);
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "YOU MUST LOG IN" });
    }
    const { _id } = payload;
    User.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};
