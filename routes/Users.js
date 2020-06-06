const express = require("express");
const users = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
process.env.SECRET_KEY="secret";
const User= require("../models/User");
users.get("/test",(req,res)=>{
    res.send({msg:"test is work"})
})
users.post("/register",(req,res)=>{
    const now = new Date();
    const userData={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        created:now
    }
    //安装body-parser,解析post传过来的数据
    // console.log(req.body);
    User.findOne({where:{email:req.body.email}})
    .then((user)=>{
        if(!user){
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                userData.password = hash;
                User.create(userData).then((user)=>{
                    res.json({status:user.name+"registed"})
                }).catch((err)=>{res.send("err: "+err)})
            })
            
        }else{
            res.json({error:"User already exist"})
        }
    })
    .catch((err)=>{
        res.send("error: "+err)
    })

})
users.post("/login",(req,res)=>{
    User.findOne({where:{email:req.body.email}}).then((user)=>{
        if(user){
            
            if(bcrypt.compareSync(req.body.password,user.password)){
                // res.send("登录成功")
                let data={name:user.name,email:user.email,created:user.created};
                let token=jwt.sign(data,process.env.SECRET_KEY,{expiresIn:1440})
                res.send(token)
            }else{
                res.send("password is incorrect")
            }
        }else{
            res.json({err:"User does not exist"})
        }
    })
})

module.exports=users;