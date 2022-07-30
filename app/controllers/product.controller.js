const {resGenerator} = require("../helpers/methods")


class Product{
static add = async (req,res)=> {

    try{
        const productData = new productModel({...req.body, addedby:req.user._id})
        await productData.save()
        resGenerator(res,200,productData,"message")

    }
    catch (e){
        resGenerator(res, 500, e.message, "invalid")
    }
}



}
module.exports = Product 