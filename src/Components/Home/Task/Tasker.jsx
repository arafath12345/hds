
import Tr from './Tr';


const Tasker = ({datas,selected,setSelected}) => {
    
    
  
    return (
      

        <div className='min-w-2/3   rounded-lg'>
            <div className="overflow-x-auto bg-white">
                <table className="table">
                    {/* head */}
                    <thead className='border-black border-2'>
                        <tr>

                            <th>Items</th>
                            <th>Current Bid</th>
                            <th>Time Left</th>
                            <th>Bid Now</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        
                      {
                        datas.map(data =>  <Tr selected={selected} setSelected={setSelected}  key={data.id} data={data}></Tr>)
                      }


                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default Tasker;