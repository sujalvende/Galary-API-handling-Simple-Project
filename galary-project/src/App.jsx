import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './component/Card'

function App() {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getdata = async ()=> {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
  
    setUserData(response.data)
    console.log(userData);
    
  }

  useEffect(function(){
    getdata()
  },[index])

    let printUserData = <h1 className='font-semibold'>Cheak your internet</h1>

    if(userData.length > 0){
      printUserData = userData.map(function(elem,idx){
        
        return <div key={idx}>
          <Card elem={elem} />
        </div>
      })
    }

  return (
    <div className='overflow-auto my-4'>
      
      <h1 className='fixed bg-slate-700 text-white p-1'>{index}</h1>

      <div className='flex flex-wrap gap-4 justify-center'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center my-5 gap-6'>
        <button
         className='px-5 py-3 text-sm font-semibold bg-amber-500 rounded-lg cursor-pointer active:scale-95'
         style={{opacity: index == 1? 0.8 : 1}}
         onClick={()=>{
          if(index>1){
            setIndex(index-1);
            setUserData([])
          }
         }}
         >Prev</button>

        <h2 className='font-semibold'>Page {index}</h2>

        <button 
        className='px-5 py-3 text-sm font-semibold bg-amber-500 rounded-lg cursor-pointer active:scale-95'
        onClick={()=>{
          setIndex(index+1);
          setUserData([])
        }}
        >Next</button>
      </div>

    </div>
    
  )
}

export default App