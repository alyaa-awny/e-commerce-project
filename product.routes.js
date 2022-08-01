const router = require ("express").Router()
const product = require("../app/controllers/product.controller")
const {auth, authAdmin} = require("../middleware/auth.middleware")
router.post("/add",authAdmin,product.addProduct)
router.get("/getSingle/:id",authAdmin,product.getSingle)
router.get("/myProducts",auth,product.myProducts)
router.delete("/delProduct",authAdmin,product.delProduct)
router.post("/editProduct",authAdmin,product.editProduct)

module.exports = router 