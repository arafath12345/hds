import React from 'react';
import love from '../../../assets/heart-regular.svg'
import { toast, ToastContainer } from 'react-toastify';

const Righter = ({ selected, setSelected }) => {

    const handleCancel = (selet) => {
        const updatedatas = selected.filter(data => data.id !== selet.id);
        setSelected(updatedatas);

        setTimeout(() => {
            toast(`Cancel ${selet.name} item`);
        }, 10);
        toast.dismiss()

    }

    const totalBid = selected.reduce((sum, item) => sum + item.bid, 0);

    return (

        <div>
            <div className='1/3 flex flex-col justify-center  '>

                <div className='bg-white w-full rounded-md flex flex-col justify-center items-center  p-5'>
                    <div className='flex justify-center items-center'>
                        <img src={love} className='h-5 w-5' alt="" /> <h2 className='text-2xl'>Favorite Items</h2>
                    </div>

                    <hr className="border-t h-1 w-full border-black my-4 " />
                    {
                        selected.length === 0 ?
                            <div className='flex flex-col justify-center w-2/3 items-center'>
                                <h3 className='text-xl'>No favorites yet</h3>
                                <p className='text-center'>Click the heart icon on any item to add it to your favorites</p>
                            </div>
                            :
                            <div>
                                <div>
                                    {
                                        selected.map((selet, idx) => <div key={idx} className='flex w-full justify-between gap-3 p-2 border-2 m-2 rounded-md'>
                                            <img className='h-16 w-16' src={selet.image} alt="" />
                                            <div>
                                                <h3>{selet.name}</h3>
                                                <div className='flex justify-between'>
                                                    <h4>${selet.bid}</h4>
                                                    <h4>Bid : {selet.bidCount}</h4>
                                                </div>
                                            </div>
                                            <div className='w-1/12 flex justify-end'>
                                                <button onClick={() => handleCancel(selet)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                    </svg>
                                                </button>

                                            </div>


                                        </div>
                                        )
                                    }
                                    <ToastContainer />


                                </div>

                            </div>
                    }
                    <hr className="border-t h-1 w-full border-black my-4 " />
                    <div className='flex justify-between w-full p-3'>
                        <h1 className='text-xl font-bold'>Total bids Amount</h1>
                        <h1 className='text-xl font-bold'>${totalBid}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Righter;