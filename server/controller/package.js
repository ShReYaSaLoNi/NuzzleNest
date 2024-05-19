const packageService = require('../services/package.js');

const createPackage = async (req,res)=>{
    try{
        const package = await packageService.createPackage(req.body);
        return res.status(201).send(package);
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}

const deletePackage = async (req,res)=>{
    try{
        const package = await packageService.deletePackage(req.params.id);
        return res.status(201).send(package);
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}

const updatePackage = async (req,res)=>{
    try{
        const package = await packageService.updatePackage(req.params.id, req.body);
        return res.status(201).send(package);
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}

const findPackageById = async (req,res)=>{
    try{
        const package = await packageService.findPackageById(req.params.id);
        return res.status(201).send(package);
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}

const getAllPackages = async (req,res)=>{
    try{
        const packages = await packageService.getAllPackages(req.query); 
        return res.status(201).send(packages);
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}

const createMultiplePackage = async (req,res)=>{
    try{
        const package = await packageService.createMultiplePackage(req.body);
        return res.status(201).send({message: "Products created successfully"});
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}

module.exports = {createPackage, createMultiplePackage, updatePackage, deletePackage, findPackageById, getAllPackages}