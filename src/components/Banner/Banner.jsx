import React from 'react';

const Banner = () => {
    return (
        <div className='relative'>
            <div>
                <img className='w-full md:h-[85vh] h-[60vh] object-cover' src='assets/Banner-min.jpg'></img>
            </div>
            <div className='absolute md:top-1/6 top-1/8 md:left-1/9 left-1/12 transform translate-x-3 translate-y-1/5'>
                <h1 className='md:text-6xl text-xl font-bold md:font-normal text-white'>Bid on Unique items from <br /> Around the world!!</h1>
                <p className='text-white mt-6 md:text-2xl text-sm'>Discover  rare collectibles, luxury goods, and vintage <span className='md:inline hidden'><br /></span> treasures in our curated auctions </p>
                <button className='btn bg-white text-black rounded-4xl mt-6 font-bold'>Explore Auctions..</button>
            </div>
        </div>
    );
};

export default Banner;