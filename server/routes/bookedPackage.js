const express =require('express');
const router = express.Router();

const bookedPackageController = require('../controller/bookedPackage');
const authenticate = require('../middleware/authenticate');


router.put('/:id',authenticate,bookedPackageController.updateBookedPackage);
router.delete('/:id',authenticate,bookedPackageController.removeBookedPackage);

module.exports=router;