const express =require('express');
const router = express.Router();

const reviewController = require('../controller/review');
const authenticate = require('../middleware/authenticate');


router.post('/create',authenticate,reviewController.createReview);
router.get('/package/:packageId',authenticate,reviewController.getAllReview);

module.exports=router;