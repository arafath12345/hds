import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 pt-40 pb-10'>
            <div className="text-2xl">
                <span className='text-blue-400'>Aution</span>
                <span className='font-bold text-[#ffd337]'>Gallery</span>
            </div>
            <ul className='decoration-0 flex gap-3.5'>
                <li>Home</li>
                <li>Auctions</li>
                <li>Categories</li>
                <li>How to works</li>
            </ul>
            <p>© 2025 AuctionHub. All rights reserved.</p>

        </div>
    );
};

export default Footer;