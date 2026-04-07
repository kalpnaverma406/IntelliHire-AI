import'dotenv/config';
//import dotenv from"dotenv";
//dotenv.config();
import express from"express"
import connectDb from"./config/connectDb.js";
import cookieParser from "cookie-parser";

import cors from "cors"
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import interviewRouter from './routes/interview.route.js';
//import interviewRoutes from "./routes/interview.js";
//console.log("API KEY:",process.env.OPENAI_API_KEY);

 const app = express()
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))


  app.use(express.json())
  app.use(cookieParser())
  

authRouter
  app.use("/api/auth",authRouter)
  app.use("/api/user", userRouter)
  app.use("/api/interview" , interviewRouter)

  
  const PORT= process.env.PORT || 6000
  app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
    connectDb()
  })
  