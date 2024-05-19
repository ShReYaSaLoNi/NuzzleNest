const mongoose = require('mongoose');

const bookedPackagesSchema = new mongoose.Schema({
    bookings:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "bookings",
        required: true,
    },
    packages:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'packages',
        required: true,
    },
    category:{
        type:  String, 
        required: true,
    },
    quantity:{
        type:Number,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    discountedPrice:{
        type:Number,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    }
});

const  BookedPackage = mongoose.model("bookedPackages", bookedPackagesSchema);
module.exports = BookedPackage;