import React, { useEffect } from 'react'
import AddressCard from '../addresscard/addresscard';
import { Button } from '@mui/material';
import BookingData from '../bookings/bookingdata';
import {useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../../State/store';
import { getOrderById } from '../../../State/Order/action';

const OrderSummary = () =>{

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const orderStatus = useSelector(store => store.order);
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get('order_id')

    console.log(orderId)

    useEffect(()=>{
        dispatch(getOrderById(orderId))
    },[orderId])

    return(
        <div>
            <div className='p-5 shadow-lg rounded-5-md border' style={{backgroundColor:"#FFDD95", color:"#333A73"}}>
                <AddressCard />
            </div>
            <div className='lg:grid grid-cols-3 relative'>
        <div className='col-span-2'>
            {orderStatus.order?.orderItems.map((item)=> <BookingData item = {item}/>)}
        </div>
        <div className='ml-10 mt-10 h-[100vh] lg:mt-5' style={{color:"#333A73"}}>
        <div className='border' style={{backgroundColor:"#FFDD95"}}>
            <p className='uppercase font-bold opacity-60 pb-4 mt-2 flex justify-center'>
                Price Details
            </p>
            <hr/>
            <div className='space-y-3 font-semibold ml-2'>
                <div className='flex justify-between pt-3'>
                    <span>Price</span>
                    <span>${orderStatus.order?.totalPrice}</span>
                </div>
            </div>
            <div className='space-y-3 font-semibold ml-2'>
                <div className='flex justify-between pt-3'>
                    <span>Discount</span>
                    <span className='text-green-600'>${orderStatus.order?.totalPrice-orderStatus.order?.totalDiscountedPrice}</span>
                </div>
            </div>
            <div className='space-y-3 font-semibold ml-2'>
                <div className='flex justify-between pt-3'>
                    <span>Delivery</span>
                    <span className='text-green-600'>Free</span>
                </div>
            </div>
            <div className='space-y-3 font-semibold ml-2 mb-7'>
                <div className='flex justify-between pt-3 font-bold'>
                    <span>Total Amount</span>
                    <span className='text-green-600'>${orderStatus.order?.totalDiscountedPrice}</span>
                </div>
            </div>
            <Button variant="contained" className='w-full mt-5' sx={{px:"2.5rem",py:".7rem"}} style={{backgroundColor:"#333A73"}} onClick={()=>navigate('/checkout?step=2')}>Checkout</Button>
        </div>
        </div>
        </div>
        </div>
    )
}

export default OrderSummary;