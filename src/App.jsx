import { useState } from 'react';
import './App.css';
import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar sua funcionalidade no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Momento com a Familia",
      category: "Familiar",
      isCompleted: false,
    },
  ]);

  return (
    <div className="App">
      <h1>Lista de Tarefas da Júlia</h1>

      <div className="todo-list">
        {todos.map ((todo) =>(
        <Todo todo={todo}/>
        ))}
      </div>
      <TodoForm/>
    </div>

  );
}

export default App
