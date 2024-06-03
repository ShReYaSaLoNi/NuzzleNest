import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from '../customers/pages/hompage/homepage';
import PackageData from '../customers/components/packages/package';
import Navigation from '../customers/components/navigation/navigation';
import Footer from '../customers/components/footer/footer';
import Bookings from '../customers/components/bookings/bookings';
import PackageDetails from '../customers/components/packagedetails/packagedetails';
import Checkout from '../customers/components/checkout/checkout';
import Order from '../customers/components/order/order';
import OrderDetails from '../customers/components/order/orderdetails';

const CustomerRouters = () =>{
    return(
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<HomePage />}></Route>
                <Route path="/register" element={<HomePage />}></Route>
                <Route path="/bookings" element={<Bookings />}></Route>
                <Route path="/packages" element={<PackageData/>}></Route> 
                <Route path="/package/:packageId" element={<PackageDetails />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                <Route path="/account/order" element={<Order />}></Route>
                <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
      {/* <Order/> */}
      {/* <OrderDetails /> */}
            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRouters;