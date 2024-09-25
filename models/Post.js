const mongoose = require("mongoose")

const PostSchema = new mongoose.model({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

module.exports = mongoose.model("PostS",PostSchema);