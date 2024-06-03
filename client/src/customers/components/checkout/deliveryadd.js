import React from 'react'
import { Grid, Button, Box, TextField } from '@mui/material';
import AddressCard from '../addresscard/addresscard';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../../State/Order/action';
import { useNavigate } from 'react-router-dom';


const DeliveryAdd = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit =(e) =>{
        e.preventDefault();
        const data = new  FormData(e.currentTarget);

        const address={
            firstName: data.get("firstName"),
            lastName :data.get("lastName"),
            streetAddress: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            mobile: data.get("phoneNumber")
        }

        const orderData = {address, navigate}

        dispatch(createOrder(orderData));
        console.log(orderData);
    }

    return(
        <div className='my-6'>
           <Grid container spacing={4}>
                <Grid xs={12} lg={4} className='border rounded-5-md shadow-md h-[30.5rem] overflow-y-scroll mx-6'  style={{backgroundColor:"#FFDD95"}}>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />
                        <Button onClick={handleSubmit} sx={{mt:2}} size="large" variant="contained" style={{backgroundColor:"#333A73"}}>
                        Deliver Here
                        </Button>
                    </div>
                </Grid>

                <Grid xs={12} lg={7} className='px-3'>
                    <Box className='border rounded-5-md shadow-md p-5'>
                    <form  onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                required  id="firstName"  
                                label="First Name"
                                name="firstName"
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                                required  id="lastName"  
                                label="Last Name"
                                name="lastName"
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid>

                        <Grid item xs={12}> 
                            <TextField 
                                required  id="address"  
                                label="Address"
                                name="address"
                                fullWidth
                                autoComplete="given-name"
                                multiline
                                rows={4}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                                required  id="city"  
                                label="City"
                                name="city"
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                                required  id="state"  
                                label="State/Province/Region"
                                name="state"
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                                required  id="zip"  
                                label="Zip/ Postal Code"
                                name="zip"
                                fullWidth
                                autoComplete="shipping postal-code"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                                required  id="phoneNumber"  
                                label="Phone Number"
                                name="phoneNumber"
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        <Button sx={{py:1.5, mt:2}} size="large" variant="contained" type="submit" style={{backgroundColor:"#333A73"}}>
                         Deliver Here
                        </Button>
                        </Grid>
                        </Grid>
                    </form>
                    </Box>
                </Grid>
           </Grid>
        </div>
    )
}

export default DeliveryAdd;