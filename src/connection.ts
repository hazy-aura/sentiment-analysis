import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URI = process.env.DB_URI;

export const connectToDatabase = async (): Promise<void> => {
    if (!DB_URI) {
        throw new Error("DB_URI is not defined in environment variables");
    }
    try{
     await mongoose.connect(DB_URI).then(() => {
        console.log("Connected to the database successfully");
      }
     );
     
    }
    catch(err){
        console.error("Error connecting to the database:", err);
        throw err;
    }
}
