const Rating = require('../models/ratings');
const packageService = require('../services/package');

async function createRating(reqData, user){
    const package = await packageService.findPackageById(reqData.packageId);

    const rating = new Rating({
        user: user._id,
        package: package._id,
        rating: reqData.rating
    })

    await package.save();
    return await rating.save();
}

async function getPackageRating(packageId){
    //const package = await packageService.findPackageById(reqData.packageId);
    return await Rating.find({package : packageId});
}

module.exports={
    createRating, getPackageRating
}