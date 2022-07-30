const userModel = require("../db/models/user.model")
const {resGenerator} = require("../helpers/methods")

class User{
static register = async (req, res)=>{
    try{
         const data = new userModel(req.body)
         await data.save()
         resGenerator(res, 200,data ,"registered")
    }

    catch(e){
        resGenerator(res,500,e.message,"can't register")

    } 
}
static login = async(req,res)=>{
    try{

    }
    catch(e){
        resGenerator(res,500,e.message,"can't login")
    }
}
static logout = async(req,res)=>{
    try{

    }
    catch(e){
        resGenerator(res,500,e.message,"can't logout")
        
    }
}
static editProfile = async(req,res)=>{
    try{

    }
    catch(e){
        resGenerator(res,500,e.message,"can't edit profile")
    }
}
static changePassword = async(req,res)=>{
    try{

    }
    catch(e){
        resGenerator(res,500,e.message,"can't change password")
    }
}
static forgetPassword = async(req,res)=>{
    try{

    }
    catch(e){
        resGenerator(res,500,e.message,"can't ")
        
    }
}
static activate = async(req,res)=>{
    try{

    }
    catch(e){
        resGenerator(res,500,e.message,"can't activate")
    }
}
static delAccount= async(req,res)=>{
    try{

    }
    catch(e){
        resGenerator(res,500,e.message,"can't del account")
    }
}
static deactivate = async(req,res)=>{
    try{

    }
    catch(e){
        resGenerator(res,500,e.message,"can't deactivate")
    }
}
static changeImage = async(req,res)=>{
    try{

    }
    catch(e){
        resGenerator(res,500,e.message,"can't change image")
    }
}
static allUsers = async(req,res)=>{
    try{

    }
    catch(e){
        
    }
}
static singleDetails   = async(req,res)=>{
    try{

    }
    catch(e){
        
    }
}
}
module.exports = User