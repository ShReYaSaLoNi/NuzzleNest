const Package = require('../models/package');

async function createPackage(reqData){
    try    
    {const package = new Package({
        title: reqData.title,
        category: reqData.category,
        price: reqData.price,
        discountedPrice: reqData.discountedPrice,
        imageURL: reqData.imageURL,
     })

     return await package.save();}
     catch(error){
        throw new Error(error.message);
     }
}

async function deletePackage(packageId){
    const package = await findPackageById(packageId);

    await Package.findByIdAndDelete(packageId);
    return "Package Deleted";
}

async function updatePackage(packageId, reqData) {

    return await Package.findByIdAndUpdate(packageId, reqData);
}

async function findPackageById(id){
    const package = await Package.findById(id);

    if(!package){
        throw new Error("Package not found by Id"+ id);
    }
    return package;
}

async function getAllPackages(reqQuery){
    let {category,discount} = reqQuery;

    let query = Package.find();
    //console.log(query);

    if(category) {
        const categorySet = new Set(category.split(",").map(category=>category.trim().toLowerCase()));

        const categoryRegex = categorySet.size>0?new  RegExp([...categorySet].join("|"),"i"): null;

        query=query.where("category").regex(categoryRegex);
    }


    // if(sort){
    //     const sortDirection = sort === "price_high"?-1:1;
    //     query =query.sort({discount: sortDirection});
    //     query.sort({discountPrice: sortDirection})
    // } 

    const package = await query.exec();

    return {content:package};
}

async function createMultipleProduct(packages){
    for(let package of packages){
        await createPackage(package);
    }
}

module.exports={createPackage, createMultipleProduct, deletePackage,updatePackage, getAllPackages, findPackageById}
