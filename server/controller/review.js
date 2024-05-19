const reviewService = require('../services/review');

const createReview = async(req,res)=>{

    const user = req.user;
    try{
        const review = await reviewService.createReview(req.body,user);
        return res.status(201).send(review);
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}

const getAllReview = async(req,res)=>{

    const packageId = req.params.packageId;
    try{
        const review = await reviewService.getAllReview(packageId);
        return res.status(201).send(review);
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}

module.exports = {
    getAllReview, createReview
}