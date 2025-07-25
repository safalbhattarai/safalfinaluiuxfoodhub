import mongoose from "mongoose";

const connectDB = async()=>{
    try {

        const {connection} = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB is connected at : ${connection.host}`)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}

export default connectDB;