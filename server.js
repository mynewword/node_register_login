/*
 * @Author: 张栋 
 * @Date: 2020-06-04 23:08:08 
 * @Last Modified by: 张栋
 * @Last Modified time: 2020-06-06 09:20:31
 */

const express = require("express");
const bodyParser = require("body-parser")
const Users = require("./routes/Users");
const app=express();
const port=process.env.PORT||5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.send({msg:"server is work"})
})
app.use("/api/v1",Users)
app.listen(port,()=>{
    console.log("server is running on port:"+port)
})