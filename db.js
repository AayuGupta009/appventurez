// Dependencies
const mysql = require("mysql2");
require("dotenv").config();

// DB Config
const dbConnect = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});

// Connecting with DB
dbConnect.connect((err) => {
  if (err) console.error("error connecting: " + err.stack);
  else console.log(`Connected with : ${process.env.DB_NAME}`);
});

module.exports = dbConnect;
