const express =require('express');
const router = express.Router();

const packageController = require('../controller/package');
const authenticate = require('../middleware/authenticate');

router.get('/',authenticate,packageController.getAllPackages);
router.get('/id/:id',authenticate,packageController.findPackageById);

module.exports=router;