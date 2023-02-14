import express from "express"
import mongoose from "mongoose";

import dotenv from "dotenv"



//Import routes

import usersRoute from "./routes/user.js"




const app = express();

import bodyParser from "body-parser";



dotenv.config()

app.use(express.json())

const connect = async ()=>
{
    console.log(process.env.MONGO_CONNECT_URI)

   try {
        await mongoose.connect(process.env.MONGO_CONNECT_URI);
        console.log("Connected to mongoDB")
    } catch (error) {
        throw error; 

    }
  };
  mongoose.connection.on("connected",()=>
  {
    console.log("Db connected")
  });
  mongoose.connection.on("disconnected", ()=>
  {
    console.log("Db disconnected");
  })




app.listen(9000,()=>{
    console.log("Started on port 9000...")
    connect()
})


app.use('/api/users', usersRoute)
app.use(bodyParser.json())