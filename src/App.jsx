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

  const addTodo = (text, category) => {

    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
    setTodos(filteredTodos)
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas da Júlia</h1>

      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>

  );
}

export default App
