const express = require("express");
//
const app = express();

require("dotenv").config();
require("./models/userSchema");

//Middlewares
app.use(express.json());
app.use(require("./routes/auth"));
//Connect db
const connectDB = require("./config/db");
connectDB();

//PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server running on PORT: ", port);
});
