const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/User")

//register user

router.route("/register",async(req,res)=>{
    const{name,email,password}=req.body;
    try{
        let user = User.findOne({email:email})

        if(user){
            return res.status(400).json({msg:"user already registered"})
        }
        user = new User({name,email,password})

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password,salt)

        await user.save()

        const payload = {user:{id:user.id}}
        const token = jwt.sign(payload,proess.env.JWT_SECRET,{expiresIn:3600})

        res.json({token})
    }   catch(error){
        res.status(500).send(`server error`)
    }
})

router.route("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        let user =await User.findOne({email})

        if(!user){
            return res.status(404).json({msg:"Invalid Credentials"})
        }
        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(404).json({msg:"Invalid credentials"})
        }
        const payload = {user:{id:user.id}}
        const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:3600})
        res.json({token})
    }catch(err){
        console.error(err.message)
        res.status(500).send("server error")
    }
})

module.exports = router;