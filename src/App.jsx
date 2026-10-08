import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [Todos, setTodos] = useState([]);
  const [InputValue, setInputValue] = useState("");

  function addTodo(e) {
    e.preventDefault();
    setTodos([...Todos, InputValue]);
    setInputValue("")
  }















//Bara HTML nedanför.
  return (
    <>  
      <h1>My Todos</h1>
      
      <div>
        <form onSubmit={() => addTodo(e)}>
          <input value={InputValue} onChange={event => setInputValue(event.target.value)} type="text" />
          <button onClick={addTodo}>Add todo</button>
        </form>
      </div>



      {Todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}

 
    </>
  )
}

export default App
