import React from 'react';

const HomeSectionCard =({profile})=>{
    return(
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[12rem] mx-3'>
            <div className='h-[10rem] w-[10rem]' style={{paddingTop:"20px"}}>
                <img className='object-cover object-top w-full h-full' 
                 src={profile.imageURL} alt="profile image"
                 />
            </div>

            <div className='p-4'>
                <h3 className='text-lg font-medium text-white-900'>{profile.name}</h3>
                <p className='mt-2 text-sm text-gray-500'>{profile.status}</p>
            </div>
        </div>
    )
}

export default HomeSectionCard;