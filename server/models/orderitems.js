const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderItemsSchema = new Schema({

    packages: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'packages',
        required : true,
    },
    category: {
        type: String,
    },
    quantity:{
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,   
    },
    discountedPrice: {
        type: Number,
        required: true,
    },
    user:{
        type:  mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: true,
    },
})

const OrderItem =mongoose.model("orderItems", orderItemsSchema);

module.exports = OrderItem;