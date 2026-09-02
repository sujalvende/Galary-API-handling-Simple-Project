import React from 'react'

function App() {

  const onScroll=(val)=>{
    console.log("Scrolling at speed ",val);
    
  }

  return (
    <div onWheel={function(elem){
      onScroll(elem.deltaY);
    }}>
      <div className='h-screen w-full bg-slate-600'>Page1</div>
      <div className='h-screen w-full bg-slate-700'>Page2</div>
      <div className='h-screen w-full bg-slate-800'>Page3</div>
    </div>
  )
}

export default App