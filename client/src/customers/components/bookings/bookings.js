import React, { useEffect } from 'react'; 
import { Button } from '@mui/material';
import BookingData from './bookingdata';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBooking } from '../../../State/Booking/action';
import { useSelector } from 'react-redux';
import { store } from '../../../State/store';

const Bookings=()=>{

    const navigate = useNavigate();
    const bookingState = useSelector(store => store.booking);
    const dispatch = useDispatch();

    const handleCheckout = () =>{
    navigate(`/checkout?step=1`)
    }

    useEffect(()=>{
        dispatch(getBooking())
    },[bookingState.updatebookedPackages, bookingState.removebookedPackages])

    return(
        <div className='lg:grid grid-cols-3 lg:px-16 relative' style={{color:"#333A73"}}>
        <div className='col-span-2'>
            {bookingState.booking?.bookedPackages.map((item)=> <BookingData item ={item}/>)}
        </div>
        <div className='px-5 top-0 h-[100vh] mt-5 lg:mt-0'>
        <div className='border' style={{backgroundColor:"#FFDD95"}}>
            <p className='uppercase font-bold opacity-60 pb-4 mt-2 flex justify-center'>
                Price Details   
            </p>
            <hr/>
            <div className='space-y-3 font-semibold ml-2'>
                <div className='flex justify-between pt-3 text-black'>
                    <span>Price</span>
                    <span>${bookingState.booking?.totalPrice}</span>
                </div>
            </div>
            <div className='space-y-3 font-semibold ml-2'>
                <div className='flex justify-between pt-3'>
                    <span>Discount</span>
                    <span className='text-green-600'>-${bookingState.booking?.totalPrice-bookingState.booking?.totalDiscountedPrice}</span>
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
                    <span className='text-green-600'>${bookingState.booking?.totalDiscountedPrice}</span>
                </div>
            </div>
            <Button onClick={handleCheckout} variant="contained" className='w-full mt-5' sx={{px:"2.5rem",py:".7rem"}} style={{backgroundColor:"#333A73"}}>Checkout</Button>
        </div>
        </div>
        </div>
    )
}

export default Bookings;