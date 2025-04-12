import React, { useEffect, useState } from 'react';

import Tasker from './Tasker';
import Righter from './Righter';

   


const Task = () => {
    const [selected, setSelected] = useState([]);

    const [datas, setdatas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        fetch('data.json')
          .then(response => response.json())
          .then(data => {
            setdatas(data);
            setLoading(false);
          })
          
      }, []);


    return (
        <div className=' flex justify-center gap-5 '>
            {
                loading ?
                 <progress className="progress w-56"></progress> 
                :
                <Tasker selected={selected} setSelected={setSelected} datas={datas}  ></Tasker>
            }
               
            

            <Righter  setSelected={setSelected} selected={selected}></Righter>



        </div>
    );
};

export default Task;