import mongoose from "mongoose";
import dotenv from 'dotenv'

export const connectDb = async()=>{
    await mongoose.connect(process.env.MONGO_URI).then(
        console.log("MongoDb is active")
    ).catch((error)=>console.log(error))
    
}

