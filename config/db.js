const mongoose = require("mongoose")

const connectDB=async()=>{
    try{
        await mongoose.connect("connection string",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("mongodb connected")
    }catch(error){
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB;