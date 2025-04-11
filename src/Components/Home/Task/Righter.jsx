import React from 'react';
import love from '../../../assets/heart-regular.svg'

const Righter = () => {
    return (
        <div>
            <div className='1/3 flex flex-col justify-center  '>

                <div className='bg-white w-full rounded-md flex flex-col justify-center items-center  p-5'>
                    <div className='flex justify-center items-center'>
                        <img src={love} className='h-5 w-5' alt="" /> <h2 className='text-2xl'>Favorite Items</h2>
                    </div>

                    <hr className="border-t h-1 w-full border-gray-300 my-4 " />
                    <div className='flex flex-col justify-center w-2/3 items-center'>
                        <h3 className='text-xl'>No favorites yet</h3>
                        <p className='text-center'>Click the heart icon on any item to add it to your favorites</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Righter;