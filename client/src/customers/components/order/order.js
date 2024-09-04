 import React, { useEffect } from 'react';
 import {Grid} from '@mui/material';
 import OrderCard from './ordercard';
 import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { store } from "../../../State/store";
import { useSelector } from "react-redux";
import { getOrder } from '../../../State/Order/action';
//import OrderCard from "./ordercard";



 const orderStatus = [
    {label:"Pending", value:"PENDING"},
    {label:"Delivered", value:"delivered"},
    {label:"Cancelled", value:"cancelled"},
    {label:"Returned", value:"returned"}
 ]

const Order = () =>{

    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const orderState = useSelector(store => store.order);
    console.log(orderState);

    useEffect(()=>{
        dispatch(getOrder())
      },[])

    return(
        <div className='px-5 lg:px-20'>
            <Grid container sx={{justifyContent:"space-between"}} className='ml-4 mt-2'>
                <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg p-5 top-5' style={{backgroundColor:"#FFDD95", color:"#333A73"}}>
                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-4 mt-10'>
                        <h1 className='font-semibold' style={{color:"#333A73"}}>ORDER STATUS</h1>
                        
                        {orderStatus.map((option)=><div className='flex items-center'>
                                                   <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                                                   <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                                                    {option.label}
                                                   </label> 
                        </div>)}
                       </div>
                    </div>
                </Grid>
                <Grid item xs={9}>
                <div className='space-y-3'>
                {/* {[1,1,1,1,1].map((item)=><OrderCard />)} */}
                {/* { orderState.orders && orderState.orders?.content?.map((item)=><OrderCard item={item} />)} */}
                {orderState.order?.orderItems.map((item)=> <OrderCard item ={item}/>)}
                </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Order;