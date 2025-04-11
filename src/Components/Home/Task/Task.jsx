import React, { Suspense } from 'react';

import Tasker from './Tasker';
import Righter from './Righter';

const dataPromise = fetch('data.json')
    .then(res => res.json());



const Task = () => {

    return (
        <div className=' flex justify-center gap-5 '>
            <Suspense fallback="<span>Loading</span>">
                <Tasker dataPromise={dataPromise}></Tasker>
            </Suspense>

            <Righter></Righter>



        </div>
    );
};

export default Task;