const jwt = require("jsonwebtoken");
const config =require("./config/config");
const fs = require("fs");
const bcrypt=require("bcrypt-nodejs");
const userController=require("./controller/user_controller");
const loginController=require("./controller/user_login_controller");


module.exports = function(app){
console.log("app")
app.post("/api/signup",userController.createuser);
app.get("/api/login",loginController.findUser)
}