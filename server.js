const express = require("express");
var pub = __dirname 
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
require("./config/dbConfig");
app.use(cors());

const apiRoute = require("./routes/api/api");
app.use("/api", apiRoute);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});