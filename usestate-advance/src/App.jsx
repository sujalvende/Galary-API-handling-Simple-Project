import React, { useState } from 'react'

function App() {

  const [info, setInfo] = useState([10,20,30]);

  // function clickbutton(){
  //   const newINfo = [...info];
  //   newINfo.push(40);
  //   setInfo(newINfo);
  // }

  function clickbutton(){
    setInfo(prev=>([...prev,50]));
  }

  return (
    <div>
      <h1>{info}</h1>
      <button onClick={clickbutton}>Click here</button>
    </div>
  )
}

export default App