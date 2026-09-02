import React, { useEffect, useState } from 'react'

function App() {

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);

  const change = () => {
    console.log("A changed");
  }

  useEffect(function(){
    change();
  })

  useEffect(()=>{
    change();
  })

  return (
    <div>
      <h1>The value of A is {num}</h1>
      <h1>The value of B is {num2}</h1>
      <button onClick={function(){
        setNum(num+1);
      }}>
        Change A</button>
      <button onClick={()=>{
        setNum2(num2-1);
      }}>
        Change B
      </button>
    </div>
  )
}

export default App