const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    package:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'packages',
        required: true,  
    },
    review:{
        type: String,
        required: true,
    },
})

const Review = mongoose.model('reviews', reviewSchema);

module.exports = Review;