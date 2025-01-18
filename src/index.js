// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({path:"./env"})

connectDB()


/*

// this was our 1st approach
import express from "express"
const app = express()

( async () => {
    try {
      await mongoose.connect(`${process.env.MONDODB_URI}/&{DB_NAME}`)
      app.on("error", (error) => {
        console.log("ERRR:" ,error);
        throw error
        
      })
      
      app.listen (process.env.PORT , () => {
        console.log(`App is listeing on port ${process.env.PORT}`);
      })

    } catch (error) {
        console.error("ERROR" , error)
        throw err
    }
}) ()

*/

// this is our 2nd approach 

