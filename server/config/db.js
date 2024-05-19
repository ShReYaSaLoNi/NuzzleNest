const mongoose = require("mongoose")

const mongodbURL = "mongodb+srv://shreyasaloniss2206:52E9AvC4rTLqgMcH@cluster0.vf0wivt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = () =>{
    console.log("Connected to Database");
    return mongoose.connect(mongodbURL);
}

module.exports= connectDb;