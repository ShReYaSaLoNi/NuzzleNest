const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingSchema = new Schema({
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
    rating:{
        type: Number,
        required: true,
    },
})

const Rating = mongoose.model('ratings', ratingSchema);

module.exports = Rating;