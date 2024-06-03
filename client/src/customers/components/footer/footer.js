import React from "react";
import { Grid, Typography } from '@mui/material';

const Footer = () =>{
  return (
    <div>
    <Grid className="bg-black text-white text-center mt-10" container sx= {{bgcolor:"#333A73", color:"white", py:3}} style={{paddingLeft:"40px"}}>
        <Grid item xs={8} sm={4} md={1}>
            <Typography className="pb-5" varient='h6'>License</Typography>
        </Grid>
        <Grid item xs={8} sm={4} md={1}>
            <Typography className="pb-5" varient='h6'>Help</Typography>
        </Grid>
        <Grid item xs={8} sm={4} md={1}>
            <Typography className="pb-5" varient='h6'>Contact Us</Typography>
        </Grid>
    </Grid>
    <Grid className="text-white" container sx= {{bgcolor:"#333A73", color:"white", py:1}} style={{paddingLeft:"75vw"}}>
        <Typography varient="body2" component="p" align="center">
            Copyright &copy; 2024. Shreya Saloni
        </Typography>
    </Grid>
    </div>
  );
}

export default Footer;
