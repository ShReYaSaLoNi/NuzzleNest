const BookedPackage = require("../models/bookedpackages");
const userService = require("../services/user")

async function updateBookedPackage(userId, bookedPackageId, bookedPackageData){
    try{
        const package = await findBookedPackageById(bookedPackageId) ;

        if(!package) throw new Error("Booked Package not found", bookedPackageId);

        const user = await userService.findUserById(package.user);

        if(!user) throw new Error("User not found:", userId);

        if(user._id.toString() === userId.toString()){
            package.quantity = bookedPackageData.quantity;
            package.price = package.quantity*package.packages.price;
            package.discountedPrice = package.quantity*package.packages.discountedPrice;
            const updateBookedPackage = await package.save();
            return updateBookedPackage;
        }
        else{
            throw new Error("Booking can't be updated");
        } 
    }
    catch(error){
        throw new Error(error.message);
    }
}

async function removeBookedPackage(userId, bookedPackageId){
    const bookedPackage = await findBookedPackageById(bookedPackageId);
    const user = await userService.findUserById(userId);

    if(user._id.toString()===bookedPackage.user.toString()){
       return await BookedPackage.findByIdAndDelete(bookedPackageId);
    }
    else
    throw new Error("Booked Package cannot be deleted")

}

async function findBookedPackageById(bookedPackageId){
    console.log(bookedPackageId);
    const bookedPackage =  await BookedPackage.findById(bookedPackageId).populate('packages');

    if(bookedPackage){ return bookedPackage }
    else { throw new Error("Booked Package not found by Id", bookedPackageId) }
}

module.exports = {updateBookedPackage, removeBookedPackage, findBookedPackageById}