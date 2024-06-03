import React from 'react';
import {Grid} from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import {useNavigate} from 'react-router-dom';

const OrderCard = () =>{

    const navigate = useNavigate();

    const handleOrder = () =>{
      navigate(`/account/order/${2}`)
    }
    return(
        <div onClick={handleOrder} className='p-5 shadow-lg hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src={require("../images/allcategories/betta.jpg")} alt="betta_fish" />
                    <div className='ml-5 space-y-2'>
                      <p className='font-semibold'>Betta Fish Care</p>
                      <p className='opacity-50 text-xs font-semibold'>category:"Fish"</p>
                      <p className='opacity-50 text-xs font-semibold'>specialist:"Profile1"</p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={2}>
                <p>$20</p>
            </Grid>

            <Grid item xs={4}>
                <div><p>
                    <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                        Delivered on March 03
                    </span>
                </p>
                <p className='text-xs'>
                    Your Item has been delivered
                </p>
                </div>
            </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard;