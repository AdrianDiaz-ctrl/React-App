import React from 'react'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { LoadingTodo } from '../LoadingTodo';
import { FooterSection } from '../Footer';
import { Modal } from '../modal';

function AppUI(){

const {
  error,
  loading,
  searchedTodos,
  completeTodo,
  deletTodo,
  openModal,
  setOpenModal,
} = React.useContext(TodoContext)

    return(
//todos nuestros elementos o componentes deben estar dentro de una sola etiqueta
// en este caso usamos una etiqueta que nos proporciona React (React.fragment), que es una etiquieta "invisible" para el navegador, pero ayuda a react a hacer sus calculos
    <React.Fragment>
    <TodoCounter/>
    <TodoSearch />
          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {/* {loading && <p>Estamos cargando, no desesperes...</p>} */}

            {loading && 
            new Array(4).fill(1).map((item, index)=>(
              <LoadingTodo key={index} />
              ))}

            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deletTodo(todo.text)}
              />
            ))}
          </TodoList>

              {openModal && (
                <Modal>
                    <TodoForm>

                    </TodoForm>
                </Modal>
              )}

    <CreateTodoButton 
      setOpenModal = {setOpenModal}
    />
      <FooterSection/>
    </React.Fragment>
    );
}

export { AppUI } ;
