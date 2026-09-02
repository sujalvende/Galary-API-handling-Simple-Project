import axios from 'axios'
import React from 'react'
import { useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  const getdata = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
  }
  

  return (
    <div>
      <button onClick={getdata}>Get Data</button>
      {data.map(function(ele,idx){
        return <h1>Hello, {ele.author} {idx}</h1>
      })}
    </div>
  )
}

export default App