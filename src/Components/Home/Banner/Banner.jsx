import React from 'react';
import banner from '../../../assets/Banner-min.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            <div className='flex justify-center items-center '>
                <img className='h-1/4 w-full' src={banner} alt="" />
            </div>
            <div className='absolute left-0 top-2/5 w-2/5 flex flex-col p-10 gap-2.5 '>
                <h1 className='text-white text-3xl'>Bid on Unique Items from Around the World</h1>
                <p className='text-white font-light'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
               <div> <button className='bg-white text-black rounded-md px-3 py-2'> Explore Auctions</button></div>
            </div>
        </div>
    );
};

export default Banner;