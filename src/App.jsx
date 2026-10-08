import { useState } from 'react'
import './App.css'

function App() {
  const defaultValue = [
    {text: "min första todo", isDone: false},
    {text: "min andra todo", isDone: true}
  ]

  const [Todos, setTodos] = useState(defaultValue); //Skapande av Todos state.
  const [InputValue, setInputValue] = useState(""); //State för input fältet

  function addTodo(e) { //Skapar en todo
    e.preventDefault(); //Så att inte sidan behöver ladda om vid submit event. 
    setTodos(
      [
        ...Todos, // inkludera alla befintliga todos
        { text: InputValue, isDone: false }
      ]
    );
    setInputValue(""); // Rensar input fältet
  }


function toggleCompleted(index) {
  setTodos(
    Todos.map((todo, i) => {
      if (i === index) { // ändra bara de todos som har samma index som skickades till funktionen
        return {...todo, isDone: !todo.isDone};
      } else {
        return todo; // returnera todon som den är om det inte är det indexet som vi skickade till funktionen
      }
    }
    )
  )
}

function deleteTodo(index) {
  setTodos(
    Todos.filter((todo, i) => i !== index) // behåll dem som inte har det berörda index
  );
}

//Bara HTML nedanför.
  return (
    <div className='container'>
    
      <h1>My Todos</h1>
      
      <div>
        <form onSubmit={() => addTodo(e)}>
          <input value={InputValue} onChange={event => setInputValue(event.target.value)} type="text" />
          <button className='todobutton' onClick={addTodo}>Add todo</button>
        </form>
      </div>



      {Todos.map((todo, index) => (
        <div key={index} className='Row'>
          <p className={todo.isDone ? 'completed' : 'notCompleted'}>{todo.text}</p>
          <button className='donebutton' onClick={() => toggleCompleted(index)}>Done</button>
          <button className='removebutton' onClick={() => deleteTodo(index)}>Remove</button>
        </div>
      ))}

 
    </div> 
  )
}

export default App
