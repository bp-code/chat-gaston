require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").createServer(app);

server.listen(process.env.PORT);
console.log("Server running on port 3000");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
