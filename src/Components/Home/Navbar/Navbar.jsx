
import React from 'react';
import notification from '../../../assets/bell-regular.svg'
import profile from '../../../assets/user-solid.svg'


const Navbar = () => {

    const list = <>
        <li>Home</li>
        <li>Auctions</li>
        <li>Categories</li>
        <li>How to works</li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-normal gap-5">


                        {
                            list
                        }


                    </ul>
                </div>
                <div className="text-2xl"><span className='text-blue-400'>Aution</span><span className='font-bold text-[#ffd337]'>Gallery</span></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-normal gap-5">

                    {
                        list
                    }

                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                
                   <div className='bg-[#ebf0f5] p-2 rounded-full'> <img className='h-5 w-5' src={notification} alt="" /></div>
                   <div className='bg-[#ebf0f5] p-2 rounded-full'> <img className='h-5 w-5' src={profile} alt="" /></div>
                 


                
            </div>
        </div>
    );
};

export default Navbar;