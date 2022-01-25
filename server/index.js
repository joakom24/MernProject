const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
//
const app = express();
require("dotenv").config();

//Middlewares

//Connect db
const connectDB = require("./config/db");
connectDB();

//Routes
app.get("/", (req, res) => {
  res.send("Hola mundo");
});

//PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server running on port: ", port);
});
