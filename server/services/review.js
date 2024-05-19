const Review = require('../models/review');
const packageService = require('../services/package');

async function createReview(reqData, user){
    const package = await packageService.findPackageById(reqData.packageId);

    const review = new Review({
        user: user._id,
        package: package._id,
        review: reqData.review
    })

    await package.save();
    return await review.save();
}

async function getAllReview(packageId){
    const package = await packageService.findPackageById(reqData.packageId);

    return await Review.find({package : packageId});
}

module.exports={
    createReview, getAllReview
}