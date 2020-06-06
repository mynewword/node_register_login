const Sequelize = require("sequelize");
const db = require("../database/db");
module.exports = db.sequelize.define(
    "users",
    {
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        },
        created:{
            type:Sequelize.DATE,
            defaultValue:Sequelize.NOW
        }
    },{
        timestamps:false
    }
);
//第一个参数与关系库中的表名相对应
//第三个参数控制查询语句中是否有createdAt，updatedAt