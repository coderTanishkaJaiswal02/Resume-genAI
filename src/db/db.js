const dotenv =require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

async function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected successfully")
    
}

module.exports=connectDB