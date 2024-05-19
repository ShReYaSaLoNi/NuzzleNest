const BookedPackage = require('../models/bookedpackages');
const Booking  = require('../models/bookings');
const Package  = require('../models/package');

async function createBooking(user){
    try
    {
    const booking = new Booking({user});
    const createdBooking = await booking.save();
    return createdBooking; 
    }
    catch(error){
        throw new Error(error.message);
    }
}

async function findUserBooking(user){
    try{
        let booking = await Booking.findOne({ user: user});
        console.log(booking);

        let bookedPackages = await BookedPackage.find({bookings: booking._id}).populate("packages"); 
        console.log("bookedPackages "+bookedPackages);

        booking.bookedPackages= bookedPackages;

        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItems=0;

        for(let bookedpackage of booking.bookedPackages){
            totalPrice =  totalPrice + bookedpackage.price;
            totalDiscountedPrice = totalDiscountedPrice + bookedpackage.discountedPrice;
            totalItems+= bookedpackage.quantity;
        }

        booking.totalPrice = totalPrice;
        booking.totalItems = totalItems;
        booking.totalDiscountedPrice = totalDiscountedPrice;

        console.log("totalPrice: "+booking.totalPrice);
        console.log("totalDiscountedPrice: "+booking.totalDiscountedPrice);
        return booking;
    }
    catch(error){
        throw new Error(error.message);
    }
}


    async function addBookedPackages(userId,req){
        try{
            const booking = await Booking.findOne({user: userId});
            console.log(booking);
            const package = await Package.findById(req.packageId);
            console.log(package);

            const isPresent = await BookedPackage.findOne({bookings:booking._id, packages:package._id,user: userId})
            console.log(isPresent);

            if(!isPresent){
               const bookedPackage = new BookedPackage({
                packages:package._id,
                bookings:booking._id,
                quantity:1,
                user:userId,
                price:package.price,
                category:package.category,
                discountedPrice: package.discountedPrice,
               })

               const createdBooking  = await bookedPackage.save();
               booking.bookedPackages.push(createdBooking);
               await booking.save();
               return "Package Booked"
            }
        }
        catch(error){
            throw new Error(error.message);
        }
    }

module.exports={createBooking, findUserBooking, addBookedPackages };