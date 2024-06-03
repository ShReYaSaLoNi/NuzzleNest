import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../homesectioncard/homesectioncard';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    720: {item : 3},
    1024: { items: 4 },
};

const HomeSectionCarousel = ({data,sectionName}) =>{

    const firstitems = data.slice(0,4).map((item) => <HomeSectionCard profile={item}/>)
    const seconditems = data.slice(4,8).map((item) => <HomeSectionCard profile={item}/>)

    return(
        <div className='relative px-4 lg:px-8 mb-20' style={{paddingTop:"40px"}}>
        <h2 className='text-2xl font-extrabold py-2' style={{paddingLeft:"30px", color:"orange", fontSize:"30px", fontStyle:"italic"}}>{sectionName}</h2>
        <div className='relative p-5'>
        <AliceCarousel
        items={firstitems}
        disableButtonsControls
        responsive={responsive}
        disableDotsControls
        />
        </div>
        <div className='relative p-5'>
        <AliceCarousel
        items={seconditems}
        disableButtonsControls
        responsive={responsive}
        disableDotsControls
        />
        </div>
        </div>
    )
}

export default HomeSectionCarousel;