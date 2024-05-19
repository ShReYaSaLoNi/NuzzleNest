const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    category:{
        type:String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    discountedPrice:{
        type:Number,
        required: true,
    },
    imageURL:{
        type: String,
    },
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ratings',
        },
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'reviews',
        },
    ],
});

const Package = mongoose.model('packages', packageSchema);
module.exports=Package; 