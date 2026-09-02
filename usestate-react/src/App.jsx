import React, { useState } from 'react'

function App() {

    const [changeNum, setChangeNum] = useState(0);

    function increase(){
        setChangeNum(changeNum+1);
    }

    function decrease(){
        setChangeNum(changeNum-1);
    }

    function increase5(){
        setChangeNum(changeNum+5);
    }

  return (
    <div className='flex justify-center flex-col w-full h-screen gap-15'>
        <h1 className='p-5 bg-slate-500 rounded-2xl text-4xl m-4 text-center'>{changeNum}</h1>
        <div className='flex justify-around mt-4'>
            <button onClick={increase} className='bg-slate-600 p-2 text-2xl rounded-xl'>Increase</button>
            <button onClick={decrease} className='bg-slate-600 p-2 text-2xl rounded-xl'>Decrease</button>
            <button onClick={increase5} className='bg-slate-600 p-2 text-2xl rounded-xl'>Increase by 5</button>
        </div>
    </div>
  )
}

export default App