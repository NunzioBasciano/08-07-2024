# TODO List Application

## Overview

This project is a simple and intuitive TODO List application built with React. It allows users to add, view, and delete TODO items, helping them manage their tasks effectively. The application leverages React's state management and CSS modules for styling, ensuring a seamless user experience.

## Features

- Add new TODO items
- Delete existing TODO items

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository



 2. Install the dependencies:

  ```bash
  npm install



## Usage

1. Start the development server:

   ```bash
    npm start

2. Open your browser and navigate to 
`http://localhost:3000` to see the application in action.

## Code Explanation

# App Component

The main component of the application, App, is responsible for rendering the TODO list and handling user interactions.

State
- `todos`: An array of TODO items, each with an `id` and `title`.
- `input`: A string representing the current value of the input field.

Functions
- `addTodo()`: Adds a new TODO item to the list if the input field is not empty.
- `deleteTodo()`: Deletes a TODO item from the list based on the `id`.
- `handleChange()`: Updates the input field's value as the user types.

JSX Structure
The App component renders:

- An input field and a button to add new TODO items.
- A list of TODO items, each with a delete button.

  \`\`\`
  import { useState } from 'react'
  import styles from './App.module.css'

  const initialTodos = [{
    id: self.crypto.randomUUID(),
    title: 'Qui visualizzi le tue TODO'
  }]

  function App() {

    const [todos, setTodos] = useState(initialTodos);
    const [input, setInput] = useState('');

    function addTodo() {
      if (!input.length) return;
      const id = self.crypto.randomUUID();
      const title = input;
      setTodos([...todos, { id, title }]);
      setInput('');
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
                <button id={todo.id} className={`${styles.input_section_button} ${styles.delete_button}`} onClick={deleteTodo}>DELETE</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  export default App

  \`\`\`

  ## CSS Modules

The application uses CSS modules for styling. Styles are imported from App.module.css.

/* App.module.css */

\`\`\`
.container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.container_input_section {
  margin-bottom: 20px;
}

.input_section_input {
  padding: 10px;
  font-size: 16px;
}

.input_section_button {
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 10px;
}

.container_list {
  list-style-type: none;
  padding: 0;
}

.list_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
}

.delete_button {
  background-color: red;
  color: white;
}

\`\`\`

## Contributing

If you wish to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

