import { StepLabel, Stepper, Step } from "@mui/material";
import React from "react";

const steps=[
    "Placed","Confirmed","Shipped",'Delivered'
]

const OrderTracker = ({activeStep}) =>{
return(
    <div className="w-full">
    <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label)=><Step>
            <StepLabel sx={{fontSize:"30px"}}>
                {label}
            </StepLabel>
        </Step>)}
    </Stepper>
    </div>
)
}

export default OrderTracker;