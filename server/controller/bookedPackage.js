const bookedPackageService = require('../services/bookedPackage');

const updateBookedPackage = async(req,res)=>{
    const user = await req.user
    try{
        const updatedBookedPackage = await bookedPackageService.updateBookedPackage(user._id, req.params.id, req.body);
        return res.status(200).send(updatedBookedPackage);
    }
    catch(error){
        return res.status(500).send({error: error.message});
    }
}

const removeBookedPackage = async(req,res)=>{
    const user = await req.user
    try{
        await bookedPackageService.removeBookedPackage(user._id, req.params.id);
        return res.status(200).send({message:'Booking removed'});
    }
    catch(error){
        return res.status(500).send({error: error.message});
    }
}

module.exports={updateBookedPackage, removeBookedPackage}