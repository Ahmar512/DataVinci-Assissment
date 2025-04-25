import axios from 'axios';
import { useEffect, useState } from 'react'
import List from './components/List';


function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState('active');


  const fetchData = async () =>{
    const response = await axios.get("https://datavinci-assissment.onrender.com/campaign");
    setData(response.data);
  }

  useEffect(()=>{
    fetchData();
  },[]);
  

  
  useEffect(()=>{
    console.log(data);
  },[data])


  
  if(!data) return (
    <div className='h-[100vh] w-[100wh] bg-slate-400 flex justify-center items-center'>
       <h1 className='text-4xl font-bold'>Loading...</h1>
    </div>
  )

  return (
    <div className=' min-h-screen bg-slate-400 flex justify-center'>
        <div className='w-[50%] h-full max-lg:w-[80%] py-3 flex flex-col'>
          <div className='w-full flex gap-3'>
            <button className={`px-5 py-3 text-xl font-semibold ${toggle === 'active' && 'bg-blue-300'} rounded-lg`} onClick={()=> setToggle('active')} disabled ={toggle === 'active'}>Active</button>
            <button className={`px-5 py-3 text-xl font-semibold ${toggle === 'paused' && 'bg-blue-300'} rounded-lg`} onClick={()=> setToggle('paused')} disabled={toggle === 'paused'}>Paused</button>
          </div>
          <div>
            <List data={data} toggle={toggle} />
          </div>
        </div>

    </div>
  )
}

export default App
