const ratingService = require('../services/rating');

const createRating = async(req,res)=>{

    const user = req.user;
    try{
        const rating = await ratingService.createRating(req.body,user);
        return res.status(201).send(rating);
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}

const getAllRating = async(req,res)=>{

    const packageId = req.params.packageId;
    try{
        const rating = await ratingService.getAllRating(packageId);
        return res.status(201).send(rating);
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}

module.exports = {
    getAllRating, createRating
}