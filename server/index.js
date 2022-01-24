const express = require("express");
const mongoose = require("mongoose");
//
const app = express();

//Middlewares

//Database Setup
const connectDB = require("./config/db");

//Routes
app.get("/", (req, res) => {
  res.send("Hola mundo");
});

//PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server running on port: ", port);
});
