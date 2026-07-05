import express from "express"
import dotenv from "dotenv"
dotenv.config()
 
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
 
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials:true
}))


app.get("/", (req, res) => {
    res.send("AI Interview Backend is running 🚀");
});

app.use(express.json())

app.use("/api/auth" , authRouter)
app.use("/api/user", userRouter)
app.use("/api/payment" , paymentRouter)

const PORT = process.env.PORT || 6000
app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`)
    connectDb()
})
