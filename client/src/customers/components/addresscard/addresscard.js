import React from 'react';

const AddressCard = () =>{
    return(
        <div> 
            <div className='space-y-1'>
                <p className='font-semibold'> Name</p>
                <p>Address</p>
                <div>
                    <p className='font-semibold'>Phone Number</p>
                    <p>1234567890</p>
                </div>
            </div>
        </div>
    )
}

export default AddressCard;