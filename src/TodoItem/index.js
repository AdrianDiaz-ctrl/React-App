import React from 'react';
import './TodoItem.css';
import  {FiCheck} from 'react-icons/fi';
import  {FiX} from 'react-icons/fi';

function TodoItem(props) {

  // alertas provicionales para ver que si funciona 
  // const onComplete = () => {
  //   alert('Ya completaste el todo ' + props.text);
  // };
  // const onDelete = () => {
  //   alert('Borraste el todo ' + props.text);
  // };
  
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <FiCheck></FiCheck>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <FiX/>
      </span>
    </li>
  );
}

export { TodoItem };
