import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductReviewCard = () =>{
    return(
        <div>
            <Grid container>
                <Grid item xs={2}>
                    <Box>
                        <Avatar className="text-white" sx={{width:25,height:25,bgcolor:"#cd5c5c"}}>A</Avatar>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <div className="space-y-1">
                        <div>
                            <p className="font-semibold text-sm">
                                Name
                            </p>
                            <p className="opacity-70">
                                Month Date, Year
                            </p>
                            <Rating value={4.5} name='half-rating' readOnly precision={.5}/>
                           <p>
                             Description
                           </p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                   <p><FavoriteBorderIcon /></p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard;