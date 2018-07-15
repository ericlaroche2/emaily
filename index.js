const express = require("express");
//import express from "express"; //es 2015 syntax
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

//HEROKU DEPLOYMENT
//1. dynamic port binding
//const PORT = process.env.PORT || 5001; //prod or dev

//2. specifify node env
// specify engine in package.json

//3. specify start script
//package.json script, modify to node index.js

//4. create ignore file

const PORT = process.env.PORT || 5000;
app.listen(PORT);
