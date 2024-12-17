dotenv.config({})
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import connectDb from "./database/dbConnect.js";
import userRoute from "./routes/user.route.js"

// database connection
connectDb();
const PORT = process.env.PORT||3002;
const app = express();

// default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173" ,
  credentials:true
})) // 2 cheeze paas krte hai wesbsite or credentials

//apis
app.use("/api/v1/user", userRoute); //name kuch bhi de do





app.listen(PORT, ()=>{
  console.log(`Server listen on port ${PORT}`);
  
})