const express = require("express");
const fs = require("fs");
const http = require("http");
const bodyParser = require("body-parser");
const port = 5000;

const app = express();

const routes = (req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.createReadStream("base.html", "UTF-8").pipe(res);
  } else if (req.method === "POST") {
    var data = req.body.name;

    // console.log(req.body.name);
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`<h1>${data}</h1>`);
  }
};

// Server Config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routes);

const server = http.createServer(app).listen(port, () => {
  console.log(`Listening to port : ${port}`);
});
