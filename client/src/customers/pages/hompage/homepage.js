import React from 'react';
import MainCarousel from '../../components/carousel/maincarousel';
import HomeSectionCarousel from '../../components/homesectioncarousel/homesectioncarousel';
import { profileData } from '../../components/data/profiledata';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const HomePage = () => {
    
   // const backgroundImageUrl = `url(${backgroundimage})`;

    const homepagestyle={
        backgroundColor:"white",
        height:"100%",
    }

    // const bull = (
    //     <Box
    //       component="span"
    //       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    //     >
    //       •
    //     </Box>
    //   );

    return(
        <div style={homepagestyle}>
            <img src={require('../../components/images/Main.jpg')}/>
            <div>
            <HomeSectionCarousel data={profileData} sectionName={"Meet our Members"}/>
            </div>
            <div className='mb-20'>
            <h2 className='text-2xl font-extrabold py-5 ml-8' style={{paddingLeft:"30px",marginRight:"60px", color:"orange", fontSize:"30px", fontStyle:"italic"}}>Join Us with these easy steps:</h2>
                <Card sx={{ maxWidth: 1035, marginLeft:8, backgroundColor:"#FFDD95"}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} gutterBottom>
                            <p className='font-semibold' style={{color:"#333A73"}}>Step 1:</p>Own a pet
                        </Typography>
                        <Typography sx={{ fontSize: 20 }} gutterBottom>
                        <p className='font-semibold' style={{color:"#333A73"}}>Step 2:</p> Login to NuzzleNest and find a second home for your pet
                        </Typography>
                        <Typography sx={{ fontSize: 20 }} gutterBottom>
                        <p className='font-semibold' style={{color:"#333A73"}}>Step 3:</p> Provide comprehensive care instructions to our entrusted caretakers
                        </Typography>
                        <Typography sx={{ fontSize: 20 }} gutterBottom>
                        <p className='font-semibold' style={{color:"#333A73"}}>Step 4:</p> Give your valuable feedback
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <MainCarousel />
            <h2 className='text-2xl font-extrabold py-2' style={{paddingLeft:"30px", color:"orange", fontSize:"30px", fontStyle:"italic", textAlign: 'center'}}>Thank You for visiting!</h2>
        </div>
    )
}
export default HomePage;