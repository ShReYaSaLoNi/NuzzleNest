const express = require('express');
const cors  = require("cors");

const app = express();

app.use(express.json())
app.use(cors());

app.get('/',(req,res)=>{
    return  res.send({
        message: 'Hello World'
      });
})

const authRouters = require('./routes/auth');
app.use('/auth',authRouters);

const userRouters = require( './routes/user') ;
app.use("/api/users", userRouters);

const packageRouter = require('./routes/package');
app.use('/api/packages', packageRouter);

const adminPackageRouter = require('./routes/adminPackage');
app.use('api/admin/packages',adminPackageRouter);

const bookingRouter = require('./routes/booking');
app.use('/api/booking', bookingRouter);

const bookedPackageRouter = require('./routes/bookedPackage');
app.use('/api/bookedPackage', bookedPackageRouter);

const orderRouter = require('./routes/order');
app.use('/api/orders', orderRouter);

const reviewRouter = require('./routes/review');
app.use('/api/reviews', reviewRouter);

const ratingRouter = require('./routes/rating');
app.use('/api/ratings', ratingRouter);



module.exports = app;

