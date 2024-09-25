const express = require("express")
const connectDB = require("./config/db")
const cors = require("cors")
const app = express()
const auth = require("./routes/auth")
require("dotenv").config()
const PORT = 5000;

app.use(cors())
app.use(express.json())

connectDB()

app.use("/",(req,res)=>{
    res.send("blog platform api is running")
})
app.use("/api/auth",auth)

app.listen(PORT,()=>{
console.log(`server started at port ${PORT}`)
})
