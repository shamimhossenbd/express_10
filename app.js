import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import * as path from "path";
import router from "./routes/api.js";

import { MONGODB_CONNECTION, MAX_JSON_SIZE, URL_ENCODE, PORT, WEB_CACHE, REQUEST_LIMIT_NUMBER, REQUEST_LIMIT_TIMEOUT } from "./app/config/config.js";


const app = express();
//Global Application configuration
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(hpp());
app.use(cors());
app.use(helmet());
app.use(cookieParser());

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

app.use("/api", router);

//Set Application Storage

app.use(express.static('storage'));

//Run you Express server

app.listen(PORT, () => {
   
    console.log(`Server is running on port ${PORT}`);

});

//connect to MongoDB
