//require('dotenv').config({path: './env'})

import dotenv from "dotenv";

import connectDB from "./db/db.js";

dotenv.config({
  path: "./.env",
});
connectDB();


/*
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";

( async ()=>{
    try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error)=>{
        console.log("ERROR: ",error)
        throw errro
        })

        app.listen(process.env.PORT, ()=>{
         console.log(`App is listening on port ${process.env.PORT}`)  
            })
    }catch(error){
    console.error("ERROR: ",error)
    throw error
    }
    })()
    /*













