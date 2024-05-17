import {useState} from 'react'

const TodoForm = () => {
   const [value, setValue] = useState("");
   const[category, setCategory] = useState("");

   const hanleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviou Form!");
   }


    return(
        <div className="todo-form">
        <h2>Criar Tarefa:</h2>

        <form>
            <input type="text" placeholder='Digite o título' />
            <select>
                <option value="">Selecione Categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
                <option value="familiar">familiar</option>
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>

        </div>
    )
 
};

export default TodoForm