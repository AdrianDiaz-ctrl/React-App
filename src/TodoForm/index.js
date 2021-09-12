import React from "react";
import { TodoContext } from "../TodoContext";
import './main.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };
    const onCancel = () =>{
        setOpenModal(false);
    }
    const onSubmit = (event) =>{
    // .preventDefault(); => nos va a ayudar a que cuadno el forulario se envie no recargara la pagina.
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe un nuevo TODO´S...</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="EJ: Hacer la compra..."
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className = "TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>

    );
}

export {TodoForm};