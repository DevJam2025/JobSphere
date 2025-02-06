import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionString = process.env.MONGO_URI;
    if (!connectionString) {
      throw new Error("MongoDB connection string is not set in environment variables.");
    }
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
