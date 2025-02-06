import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app=express();

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests only from the frontend's domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials:true
  }));

app.get("/Home",(req,res)=>{
    return res.status(200).json({
        message: "I am from backend",
        success:true,
    })
})

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin:"http://localhost:5173",
    Credential:true,
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// api's 
app.use("/api/v1/user",userRoute);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})