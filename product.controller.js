const productModel = require("../../db/models/product.model")
const {resGenerator} = require("../../helper/methods")

class Product{

    static addProduct= async (req,res)=>{

        try{
            const productData= new productModel({
                ...req.body,
                addedby:req.user._id
            })
            await productData.save()
            resGenerator(res,200,productData, "message")
        }
        catch (e){ 
        resGenerator(res,500,e.message,"invalid")
        }
    }
    static getSingle= async (req,res)=>{

        try{
            const productData = await productModel.findById(req.body.id)
            if(!productData) throw new Error ("product not found")

            resGenerator(res,200, productData, "done")

        }
        catch (e){ 
            resGenerator(res,500,e.message,"invalid")
            }
    }
    static myProducts = async (req,res)=>{

        try{
            await req.user.populate("allProducts")
            const data= req.user.allProducts
            resGenerator(res,200, data, "message")
        }
        catch (e){ 
            resGenerator(res,500,e.message,"invalid")
            }
    }
    static delProduct= async (req,res)=>{

        try{
            const productData= await productModel.findOneAndDelete({
                _id:req.params.id,
                addedby:req.user._id
            })
            if(!productData) throw new Error("invalid data")
            resGenerator(res,200,productData , "message")
        }
        catch (e){
            resGenerator(res,500,e.message,"invalid")
        }
    }
    static editProduct= async (req,res)=>{

        try{
            const result = await productModel.findById(req.body.id)
            resGenerator(res,200, result, "message")
        }
        catch (e){
            resGenerator(res,500,e.message,"invalid")
            
        }
    }
    static showOthersProducts = async (req,res)=>{

        try{
            const data=await productModel.find({addedby:req.body.id}) 
            resGenerator(res,200, data, "message")
        }
        catch (e){ 
            resGenerator(res,500,e.message,"invalid")
            }
    } 
    
 }
    


module.exports  = Product