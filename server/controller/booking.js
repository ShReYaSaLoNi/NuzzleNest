const bookingService = require('../services/booking');

const findUserBooking = async(req,res)=>{
    const user = await req.user;
    console.log(user._id);
    try{
        const booking = await bookingService.findUserBooking(user._id);
        console.log("       BOOKING        "+booking);
        return res.status(200).send(booking); 
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}

const addPackageToBooking = async(req,res)=>{
    const user = await req.user;
    console.log(user._id);
    console.log(req.body);
    try{
        const bookedPackage = await bookingService.addBookedPackages(user._id,req.body);
        return res.status(200).send(bookedPackage); 
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}

module.exports = {
    findUserBooking,
    addPackageToBooking
}
