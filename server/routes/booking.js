const express =require('express');
const router = express.Router();

const bookingController = require('../controller/booking');
const authenticate = require('../middleware/authenticate');

router.get('/',authenticate,bookingController.findUserBooking);
router.put('/add',authenticate,bookingController.addPackageToBooking);

module.exports=router;