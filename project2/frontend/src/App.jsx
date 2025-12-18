import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

const [jokes, setJokes] = useState([]);

useEffect(()=> {
  axios('/api/jokes')
  .then((response) => {
    setJokes(response.data)
  })
  .catch((error)=> {
    console.log("Error", error)
  })
}, [])


  return (
    <>
     <h1>Chai aur Code</h1>
     <h2>JOKES: {jokes.length}</h2>

     {
      jokes.map((joke, index) => (
        <div key={joke.id}>
          <h1>{joke.title}</h1>
          <p>{joke.content}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
