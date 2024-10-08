import React from "react";
import AddressCard from "../addresscard/addresscard";
import OrderTracker from "./ordertracker";
import { Grid, Box } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { store } from "../../../State/store";
import { useSelector } from "react-redux";
import OrderCard from "./ordercard";
import { useEffect } from "react";
import {getOrderById} from '../../../State/Order/action';

const OrderDetails = () =>{

    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const orderState = useSelector(store => store.order);
    console.log(orderState);
  
    
    useEffect(()=>{

    const data = {orderId: params.orderId}

    dispatch(getOrderById(data))
    },[params.orderId])

    return(
        <div className="px-5 lg:px-20">
        <div className="shadow-xs rounded-md p-5 border" style={{backgroundColor:"#FFDD95", color:"#333A73"}}>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
        </div>
        <div className="py-10">
            <OrderTracker activeStep={3} />
        </div>

        <Grid className="space-y-3" container>
        {/* {[1,1,1,1].map((item)=>
           <Grid item container className="shadow-xl rounded-md p-5 border" sx={{alignItems:"center", justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className="flex items-center space-x-4">
                        <img  className='w-[5rem] h-[5rem] object-cover object-top' src={require("../images/allcategories/betta.jpg")}  alt="Product Image"/>
                        <div className='space-y-2'>
                       <p className='font-semibold'>Betta Fish Care</p>
                      <p className='opacity-50 text-xs font-semibold'>category:"Fish"</p>
                      <p className='text-xs font-semibold'>specialist:"Profile1"</p>
                    </div>
                    </div>
                </Grid>
                <Grid item>
                    <Box sx={{color:"orange"}}>
                    <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2"/>
                    <span>Rate & Review</span>
                    </Box>
                </Grid>
            </Grid>)} */}
            { orderState.orders && orderState.orders?.content?.map((item)=><OrderCard product={item} />)}
        </Grid>
        </div>
    )
}

export default OrderDetails;