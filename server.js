// Installing Dependencies
const express = require("express");
const bodyParser = require("body-parser");
// const mysql = require("mysql2");
require("dotenv").config();

// App Initialization
const app = express();

// Configrations
const port = process.env.PORT;

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config + Connecting with DB
const dbConnect = require("./db");

// Routes
const routes = require("./src/routes/routes.office");
app.use("/", routes);

// Server
app.listen(port, (req, res) => {
  console.log(`Port running : ${port}`);
});
