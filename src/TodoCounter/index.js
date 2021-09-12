import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() { // recibimos la informacion como una propiedad

  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <section>
      <h1  className="Titulo__Todo">TODO´S List</h1>
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </section>
  );
}

export { TodoCounter }; // con las llaves exportamos de manera "nombrada", para exportar y usar el nombre exacto
