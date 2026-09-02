import React from 'react'

function App() {

  const user = {
    name: 'Sujal',
    age: 18,
    cul: 'Yaduvansh'
  }

  localStorage.setItem('user',JSON.stringify(user));
  const usera = JSON.parse(localStorage.getItem("user"));
  console.log(usera);

  return (
    <div>App</div>
  )
}

export default App