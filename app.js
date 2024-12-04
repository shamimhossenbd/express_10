
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import * as path from "path";
import router from "./routes/api.js";



import {
    MONGODB_CONNECTION, MAX_JSON_SIZE, URL_ENCODE, PORT, WEB_CACHE, REQUEST_LIMIT_NUMBER, REQUEST_LIMIT_TIMEOUT
    ,
 } from "./app/config/config.js";


const app = express();
//Global Application configuration
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(hpp());
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());

//Rate limit middleware

const limiter = rateLimit({
    windowMs: REQUEST_LIMIT_TIMEOUT, // 15 minutes
    max: REQUEST_LIMIT_NUMBER, // limit each IP to 100 requests per windowMs
    message: "Too many requests, please try again later."
});

app.use(limiter);


//Web Cache
app.set('etag', WEB_CACHE)


//Mongodb connection
  
//set API Routes

//Mongodb DB connection

const connectDB =async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/userTestDB");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
        
    }
}






app.use("/api", router);

//Set Application Storage

app.use(express.static('storage'));

//Run you Express server

//
app.listen(PORT, async () => {
   

    console.log(`Server running at http://localhost:${PORT}`);
     await
        connectDB();
});

//connect to MongoDB
