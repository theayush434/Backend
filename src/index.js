// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"



import connectDB from "./db/database.js"

dotenv.config({
     path:'./env'
})

connectDB()





























// function connectDB(){
    // Iss Fuctnion se bhi connect kur sakate hai Databse ko and second bhi hai IIFE JO js me padha tha
// }
// connectDB()






/*
// const express = require("express")
import  express  from "express";

const app=express()
(async()=>{
try{
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
app.on("error",()=>{
     console.log("errr",error);
     throw error
})
app.listen(process.env.PORT,()=>{
     console.log(`App is listening on port ${process.env.PORT}`);
})
}
catch(error){
     console.error("Error", error);
     throw err
}
})
*/