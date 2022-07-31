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
        const userData = await userModel.login(req.body.email,req.body.password)
        if(!userData.status) 
        return resGenerator(res, 500, {otp:userData.otp}, "activate first")
        const token = await userData.generateToken()
        resGenerator(res, 200, {user:userData, token}, "login succeded")
    }
    catch(e){
        resGenerator(res,500,e.message,"can't login")
    }
}
static activate = async(req,res)=>{
    try{
   const userData = await userModel.login(req.body.email, req.body.password)
        if (userData.status) throw new Error("already activated")
        if(userData.otp!=req.body.otp) throw new Error("invali otp")
        userData.status=true
        userData.otp= null
        await userData.save()
        resGenerator(res, 200, userData, "activated")

}
    catch(e){
        resGenerator(res,500,e.message,"can't activate user")
    }
}

static sendOTP = async(req,res)=>{
    try{
        const otp = await userModel.sendOTP(req.body.email)
             resGenerator(res, 200, otp, "OTP generated")
     
     }
         catch(e){
             resGenerator(res,500,e.message,"OTP can't generated")
         }
}
static changePassword = async(req,res)=>{
    try{
        const userData = await userModel.findOne({
            email:req.body.email,
            otp: req.body.otp
        })
        if(!userData) throw new Error("invalid")
        userData.passwor = req.body.newpass
        await userData.save()
        resGenerator(res, 200, userData, "password changed")
     
     }
         catch(e){
             resGenerator(res,500,e.message,"can't activate user")
         }
}
static logout = async(req,res)=>{
    try{
 req.user.tokens= req.user.tokens.filter(t=>t.token!=req.token)
 await req.user.save()
 resGenerator(res, 200, userData, "You logged out")
    }
    catch(e){
        resGenerator(res,500,e.message,"can't logout")
        
    }
}
static logoutAll = async(req,res)=>{
    try{
 req.user.tokens=[]
 await req.user.save()
 resGenerator(res, 200, userData, "You logged out from All devices")
    }
    catch(e){
        resGenerator(res,500,e.message,"error in processing")
        
    }
}
static editPassword = async(req,res)=>{
    try{
        
        req.user.passwor = req.body.newpass
        await req.user.save()
        resGenerator(res, 200, req.user, "password changed")
     
     }
         catch(e){
             resGenerator(res,500,e.message,"can't activate user")
         }
}
static deactivate = async(req,res)=>{
    try{
        req.user.status = false
        await req.user.save()
        resGenerator(res, 200, req.user, "account deactivated")

    }
    catch(e){
        resGenerator(res,500,e.message,"can't deactivate")
    }
}
static delAccount= async(req,res)=>{
    try{
       
        await req.user.remove()
        resGenerator(res, 200, req.user, "account deleted")
    }
    catch(e){
        resGenerator(res,500,e.message,"can't del account")
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