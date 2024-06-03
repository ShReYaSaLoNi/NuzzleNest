import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeBooking, updateBooking } from '../../../State/Booking/action';

const BookingData = ({item}) =>{

    const dispatch = useDispatch();

    const handleUpdateBookedPackages = (number) =>{
        const data = {data:{quantity: item.quantity+number}, bookedPackageId: item?._id}
        dispatch(updateBooking(data))
    }

    const handleRemoveBookedPackage=()=>{
        dispatch(removeBooking(item._id))
    }

    return(
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='w-[5rem] h-[5rem] lg:w-[5rem] lg:h-[4rem] ml-5'>
                <img className='w-full h-full object-cover object-top' src={item.packages.imageURL} alt="Nothing" />
            </div>
            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>packageName:{item.title}</p>
                <p className='opacity-70'>category:{item.category}</p>
                <p className='mt-2 font-semibold'>specialist:"Profile1"</p>
                <div className='flex space-x-5 items-center text-gray-900'>
                <p className='font-semibold'>packageCost: ${item.packages.price}</p>
                <p className='text-green-600 font-semibold'>discount: ${item.packages.discountedPrice}</p>
                </div>
            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4 ml-2'>
              <div className='flex items-center space-x-2'>
                <IconButton onClick={()=>handleUpdateBookedPackages(-1)} disabled={item.quantity<=1} sx={{color:"Green"}}>
                    <RemoveCircleOutlineIcon />
                </IconButton>
                <span className='py-1 px-2 border rounded-sm'>{item.quantity}</span>
                <IconButton onClick={()=>handleUpdateBookedPackages(1)} sx={{color:"Red"}}>
                    <AddCircleOutlineIcon />
                </IconButton>
              </div>

              <div>
                <Button onClick={handleRemoveBookedPackage} sx={{color:"Red"}}>Remove</Button>
              </div>
            </div>
        </div>
    )
}

export default BookingData;