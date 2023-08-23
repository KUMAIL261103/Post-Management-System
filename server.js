const express = require('express')
const dbconnect = require('./config/database');
const postroutes =require('./routes/post');
const app = express();
app.use(express.json());
require('dotenv').config();
const PORT = process.env.PORT||4000;
app.listen(PORT,()=>{
    console.log("server is running")
})
app.use('/',postroutes);
app.get("/",(req,res)=>{
    res.send(`<h1>BLogging</h1>`);
})
dbconnect();
