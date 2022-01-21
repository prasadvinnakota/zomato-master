require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
  });
require("dotenv").config(); // loads en variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // cross- origin mechanism
const helmet = require("helmet")
const zomato = express()

import connectionDB from "./database/connection";

zomato.use(cors());
zomato.use(express.json());
zomato.use(helmet());
zomato.listen(4000,()=>{
  connectionDB().then(()=>{console.log("sucessful connection")}).catch((error)=>{console.log("server is rinning but connection unsuccessful");
  console.log(error)})
})

// const mongoDB = "mongodb+srv://prasadvinnakota6:Nanaji3011@cluster0.lxyse.mongodb.net/zomato?retryWrites=true&w=majority";
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then( () => console.log("Connection Successful"));

