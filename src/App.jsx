import { useState } from 'react';

import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

import './App.css';

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

  const [search, setSearch] = useState (""); 

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

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Lista de Tarefas da Júlia</h1>

      <Search search={search} setSearch={setSearch}/>
      <Filter/>

      <div className="todo-list">
        {todos.filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        .map((todo) => (
          <Todo 
          key={todo.id} todo={todo} 
          removeTodo={removeTodo} 
          completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>

  );
}

export default App
