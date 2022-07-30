class MyOwnMethods  {
    static resGenerator = (res,statusCode,status, data, message)=>{
        res.status (statusCode).send({
            apiStatus: status,
            data,
            message
        })
    }

}

module.exports = MyOwnMethods