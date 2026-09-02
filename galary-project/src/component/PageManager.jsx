import React from 'react'

function PageManager(props) {
  return (
    <div>
        <div className='flex justify-center items-center my-5 gap-6'>
        <button
         className='px-5 py-3 text-sm font-semibold bg-amber-500 rounded-lg cursor-pointer active:scale-95'
         style={{opacity: props.index == 1? 0.8 : 1}}
         onClick={()=>{
          if(props.index>1){
            props.setIndex(props.index-1);
            props.setUserData([])
          }
         }}
         >Prev</button>

        <h2 className='font-semibold'>Page {props.index}</h2>

        <button 
        className='px-5 py-3 text-sm font-semibold bg-amber-500 rounded-lg cursor-pointer active:scale-95'
        onClick={()=>{
          props.setIndex(props.index+1);
          props.setUserData([])
        }}
        >Next</button>
      </div>
    </div>
  )
}

export default PageManager