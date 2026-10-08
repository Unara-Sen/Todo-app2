import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
 const [Todos, setTodos] = useState(["Min första todo", "Min andra todo"])

 function addTodo() {
  setTodos([1,2])
 }















//Bara HTML nedanför.
  return (
    <>  
      <h1>My Todos</h1>

      {Todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}

 
    </>
  )
}

export default App
