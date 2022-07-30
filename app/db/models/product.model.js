 const mongoose      = require("mongoose");
 const productSchema = mongoose.schema ({
 name:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 10
    },
    quantity:{
        type: Number,
        required: true,
        trim: true
        },

        description:{
                type: String,
                required: true,
                trim: true,
                minlength: 10,
                maxlength: 25
    }, 
    image:{
                type: String,
                required:true
    }, 
    color: {
                type: String,
                required:true,
    },
     size: {
        type: Boolean,
        required:true,
     } ,
    
    categories:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    addedby:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }, 
    


 })
 const Product = mongoose.model("Product",productSchema)
 
 module.exports = Product 
  