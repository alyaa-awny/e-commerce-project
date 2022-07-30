require ("dotenv").config()
require ("./app/db/connection")

const express = require("express")
const cors    = require("cors")

const userRoutes    = require("./app/routes/user.routes")
const productRoutes = require("./app/routes/product.routes")
const myHelper = require("./app/helpers/methods")

const app = express()

app.use(cors())
app.use(express.static(__dirname+"/uploads"))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/user", userRoutes)
app.use("api/product", productRoutes)

app.all("*",(req,res)=> {myHelper.resGenerator(res,404,false, "invalid URL", "not found")})

app.listen(process.env.PORT,()=> console.log(`we are on  http://localhost:${process.env.PORT}`))