const express =require('express');
const router = express.Router();

const packageController = require('../controller/package');
const authenticate = require('../middleware/authenticate');

router.post('/',authenticate,packageController.createPackage);
router.post('/create',authenticate,packageController.createMultiplePackage);
router.delete('/:id',authenticate,packageController.deletePackage);
router.put('/:id',authenticate,packageController.updatePackage);

module.exports = router;