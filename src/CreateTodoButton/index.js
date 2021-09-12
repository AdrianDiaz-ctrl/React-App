import React from 'react';
import './CreateTodoButton.css';
// import {TodoContext} from '../TodoContext/index'

function CreateTodoButton(props) {
  // const { openModal, setOpenModal } = React.useContext(TodoContext);

  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };
  
  return (
    <button
      className="CreateTodoButton"
      // "on..." tiene varias posibilidades de eventos
      onClick={onClickButton} // debemos asiganarle a una funcion, para que se ejecute solo cuando se llamado
    >
      +
    </button>
  );
}

export { CreateTodoButton };
