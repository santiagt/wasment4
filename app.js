const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.send("This is a test");
});

app.use("/", express.static(__dirname + "/"));
app.listen(8080);
console.log("server started");
