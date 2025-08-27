import mongoose from "mongoose";

const connectDB = async (MONGO_URI) => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`MongoDB connected to ${MONGO_URI}`);
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};

export default connectDB;
