import React from 'react';
import MainCarousel from '../../components/carousel/maincarousel';
import HomeSectionCarousel from '../../components/homesectioncarousel/homesectioncarousel';
//import backgroundimage from './homepagebackground.jpg';
import { profileData } from '../../components/data/profiledata';

const HomePage = () => {
    
   // const backgroundImageUrl = `url(${backgroundimage})`;

    const homepagestyle={
        backgroundColor:"black",
        height:"100%",
    }

    return(
        <div style={homepagestyle}>
            <MainCarousel />
            <div>
            <HomeSectionCarousel data={profileData} sectionName={"Meet our Members"}/>
            </div>
        </div>
    )
}

export default HomePage;