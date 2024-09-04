const express =require('express');
const router = express.Router();

const packageController = require('../controller/package');
const authenticate = require('../middleware/authenticate');

router.get('/',packageController.getAllPackages);
// the "authenticate" makes it neccesary for data to be displayed only after user logins
router.get('/id/:id',authenticate,packageController.findPackageById);

module.exports=router;