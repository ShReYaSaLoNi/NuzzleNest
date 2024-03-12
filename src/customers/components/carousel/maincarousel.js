import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const imagestyle={
    paddingTop: "5vh",
    paddingLeft: "25vw",
    paddingRight: "10vw",
    width: "80vw",
    height:"60vh",
}

const items = [
    <img src={require("../images/maincarousel/image2.jpg")} style={imagestyle}/>,
    <img src={require("../images/maincarousel/image3.jpg")} style={imagestyle}/>,
    <img src={require("../images/maincarousel/image4.jpg")} style={imagestyle}/>,
    <img src={require("../images/maincarousel/image1.jpg")} style={imagestyle}/>,  
];

const MainCarousel = () => (
    <div>
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    </div>   
);

export default MainCarousel;