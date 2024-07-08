import { useState } from 'react'
import styles from './App.module.css'

/* Lo mettiamo fuori dalla funzione App in modo tale da evitare che ogni volta che verrà rirenderizzata la pagina venga ridichiarata la costante  */
const initialTodos = [{
  id: self.crypto.randomUUID(),
  title: 'Qui visualizzi le tue TODO'
}]

function App() {

  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState('');

  /* */
  function addTodo() {
    if (!input.length) return;
    const id = self.crypto.randomUUID();
    const title = input;
    setTodos([...todos, { id, title }]); // sarebbe come scrivere id : id, title : title
    setInput('')
  }

  function deleteTodo(e) {
    const newList = todos.filter(todo => todo.id !== e.target.id);
    setTodos(newList);

  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (

    <div className={styles.container}>
      <div className={styles.container_input_section}>
        <input className={styles.input_section_input} type="text" onChange={handleChange} value={input} placeholder='Aggiungi una todo' />
        <button className={styles.input_section_button} onClick={addTodo}>ADD</button>
      </div>
      <ul className={styles.container_list}>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className={styles.list_item}>
              {todo.title}
              <button id={todo.id} className={styles.input_section_button + ' ' + styles.delete_button} onClick={deleteTodo}>DELETE</button>
            </li>
          )
        })}
      </ul>
    </div>

  )
}

export default App
