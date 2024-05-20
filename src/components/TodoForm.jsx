import { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const hanleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
    }


    return (
        <div className="todo-form">
            <h2>Criar Tarefa:</h2>

            <form onSubmit={hanleSubmit}>
                <input type="text" placeholder='Digite o título' value={value} onChange={(e) => setValue(e.target.value)} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione Categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                    <option value="familiar">familiar</option>
                </select>
                <button type="submit">Criar uma Tarefa</button>
            </form>

        </div>
    )

};

export default TodoForm