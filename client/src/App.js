import logo from './logo.svg';
import './App.css';

//import HomePage from './customers/pages/hompage/homepage';
//import PackageDetails from './customers/components/packagedetails/packagedetails';
import { BrowserRouter } from 'react-router-dom';
//import Bookings from './customers/components/bookings/bookings';
//import Checkout from './customers/components/checkout/checkout';
//import Order from './customers/components/order/order';
//import OrderDetails from './customers/components/order/orderdetails';
import CustomerRouters from './Routes/customerroute';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div> 
   {/* <BrowserRouter> */}
    <Routes>
      <Route path='/*' element={<CustomerRouters/>}></Route>
    </Routes>
   {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
