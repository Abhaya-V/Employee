const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name: String,
    email:String,
    password:String,
    phone: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
      }
    })
    
const userData = mongoose.model("userDatas",userSchema)
module.exports = userData