import React from 'react'

function App() {

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("Form submited.");
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App