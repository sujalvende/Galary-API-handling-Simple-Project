import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './component/Card'
import PageManager from './component/PageManager'

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

      <PageManager index={index} setIndex={setIndex} userData={userData} setUserData={setUserData} />

    </div>
    
  )
}

export default App