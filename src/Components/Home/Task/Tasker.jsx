import React, { use } from 'react';
import Tr from './Tr';

const Tasker = ({dataPromise}) => {
    const datas = use(dataPromise);
    
    
    return (

        <div className='w-2/3 bg-white  rounded-lg'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Items</th>
                            <th>Current Bid</th>
                            <th>Time Left</th>
                            <th>Bid Now</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        
                      {
                        datas.map(data =>  <Tr key={data.id} data={data}></Tr>)
                      }


                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default Tasker;