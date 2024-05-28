import mongoose, { mongo } from "mongoose";
import { config } from "./config";

const connectdb = async () => {
    try {
        
        mongoose.connection.on("connected", () => {
            console.log("Connected to database successfully");
        });
        
        mongoose.connection.on("error", (err) => {
            console.log("Error in connecting to database.", err);
        });
        
        await mongoose.connect(config.DB_URL as string);

    } catch (error) {
        console.error('failed to connect the database');
        process.exit(1);
    }
};

export default connectdb;