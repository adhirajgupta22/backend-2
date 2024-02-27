//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()           //in DB
.then(()=>{
    app.listen(process.env.PORT || 8000)
     console.log("server is running on port : ",process.env.PORT)

     app.on("errror", (error) => {
        console.log("ERRR: ", error);
        throw error;
    
    })
})
.catch((err)=>{
    console.log("mongodb connect me dikkt h!!!",err);
})


/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/

















/* WAY 1ST
import express from "express";

const app = express();
;(async ()=>{
    //alwyas use try catch whenever handling db
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error: ",(error)=>{
        console.log("error:",error)
        throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
         console.error("Error: ",error)
         throw err  
    }
})()     //; can be generally used as to end the previous lines of code
*/
