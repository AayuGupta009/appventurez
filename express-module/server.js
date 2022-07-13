// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

// Initializing App
const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use router in app
app.use("/", router);

var obj = [];
// Routes
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

router.get("/login", (req, res) => {
  res.send(obj);
});

router.post("/login", (req, res) => {
  obj.push({ name: req.body.name, email: req.body.email });
  //   console.log(req.body);
  res.send(`Logged in with ${req.body.name} and ${req.body.email}`);
});

// Listening to Server at PORT
app.listen(port, (req, res) => {
  console.log(`Running on : ${port}`);
});
