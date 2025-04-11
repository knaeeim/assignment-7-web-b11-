import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white shadow-md px-10 py-16'>
            <div className='text-center space-y-3'>
                <h1 className='text-2xl font-bold text-blue-900'>Auction<span className='text-orange-500'>Gallery</span></h1>
                <p>Bid. Win. Won. </p>
                <ul className='flex flex-col md:flex-row justify-center md:gap-5 gap-2'>
                    <li>Home</li>
                    <li>Auction</li>
                    <li>Categories</li>
                    <li>How to Work</li>
                </ul>
                <small>@2025 ActionHub. All Rights Reserved</small>
            </div>
        </div>
    );
};

export default Footer;