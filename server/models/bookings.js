const mongoose = require( 'mongoose' );

const bookingSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    bookedPackages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bookedPackages',
        required: true,
    }],
    totalPrice:{
        type:Number,
        required:true,
        default:0
    },
    totalItems:{
        type: Number,
        required: true,
        default: 0
    },
    totalDiscountedPrice:{
        type: Number,
        required: true,
        default: 0
    },
})

const Bookings = mongoose.model('bookings', bookingSchema);

module.exports = Bookings;