import mongoose from "mongoose";



const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED  prince", error);
        process.exit(1)
    }
}

export default connectDB