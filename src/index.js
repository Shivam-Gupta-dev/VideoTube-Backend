import connectDB from './db/index.js'
import dotenv from 'dotenv'
dotenv.config({
    path: './.env'
})
import { app } from './app.js'



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port: ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MONGO db connection failed !!! ", error)
})













/*
import mongoose from 'mongoose'
import { DB_NAME } from "../constants.js";
import express from 'express'

const app = express()

console.log(process.env.PORT)
console.log(process.env.MONGODB_URI)

(async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error ",error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error(error)
        throw error
    }
})()
*/