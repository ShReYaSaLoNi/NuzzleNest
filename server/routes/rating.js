const express =require('express');
const router = express.Router();

const ratingController = require('../controller/rating');
const authenticate = require('../middleware/authenticate');


router.post('/create',authenticate,ratingController.createRating);
router.get('/package/:packageId',authenticate,ratingController.getAllRating);

module.exports=router;