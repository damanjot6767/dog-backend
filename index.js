
const express = require('express');
const logger = require('morgan');
require("dotenv").config();
const cors = require("cors");
const connect = require('./src/connect/connect.js');
const Auth = require("./src/routes/Auth.js");
const UserTask = require('./src/routes/Usertask.js');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use("/",Auth);
app.use("/user",UserTask)

app.listen(process.env.PORT,async()=>{
  await connect().then((res)=>console.log("database connected")).catch((res)=>console.log("not connected"))
  console.log("working")
})