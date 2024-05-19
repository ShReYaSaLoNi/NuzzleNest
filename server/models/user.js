const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },  
    password:{
        type:String,
        required:true,
    },   
    email:{
        type:String,
        required:true,
    },   
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    }],
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reviews"
    }]
})

const User = mongoose.model("users", userSchema);
module.exports = User;