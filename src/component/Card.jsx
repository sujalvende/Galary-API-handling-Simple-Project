import React from 'react'

function Card(props) {
    console.log(props);
    
  return (
    <div>
        <a href={props.elem.url}>
          <div className='rounded-xl h-45 w-50 lg:h-50 lg:w-55'>
          <img className='h-full w-full rounded-xl object-cover' src={props.elem.download_url} alt="" />
        </div>
        <h1 className='font-medium text-lg'>{props.elem.author}</h1>
        </a>
    </div>
  )
}

export default Card