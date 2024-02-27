// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"



import connectDB from "./db/database.js"


dotenv.config({
     path:'./env'
})

/* DB me hamne async method lekha hai to ye jub bhi complete hota hai to 
promise return karta hai to jub data base complete hojatye to yaha .then() .cathch()
use kur lege */
connectDB()
.then(()=>{
     app.listen(process.env.PORT || 8000,()=>{
          console.log(`Server is running at port : ${process.env.PORT}`)
     })
})
.catch((err)=>{
     console.error("mongo db connection failed",err);
})





























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