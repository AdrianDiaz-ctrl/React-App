import React from 'react'
import {useLocalStorage} from './useLocalStorage'

// este todoContext es un obejto, con propiedades provider y consumer
const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);

      const completedTodos = todos.filter(todo => !!todo.completed).length; //filtramos los elementos para saber cual tiene la propiedad ompleted = true, tambien contamos cada puesto con .lenght
      const totalTodos = todos.length; // 
    
      // creamos un array para no tener que llamar a todo´s cada ves que lo queramos liestar
      let searchedTodos = []; 
    
      if (!searchValue.length >= 1) { // si no hay nada escrtio en el input mostraremos todos los todo´s
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {  // 
          // llamamos a cada uno de los todos y lo combertimos a minisculas para analizarlos
          const todoText = todo.text.toLowerCase(); // texto dentro de nuestros Todo´s
          const searchText = searchValue.toLowerCase(); // texto escrito en el input
          return todoText.includes(searchText); // .includes => usamos para comparar lo escrito por el usuario y lo guardado
        });
      }
    
      const addTodo = (text) => {
          const newTodos = [...todos]; // creamos un nuevo array con los elementos del original para poner manipularlo
          newTodos.push({
            completed: false,
            text,
          })
          saveTodos(newTodos);
      }

    
      const completeTodo = (text) => { //cuando llamemos a la funcion le enviaremos un texto, el del todo
        //variale que busca el index con .findIndex()
        const todoIndex = todos.findIndex(todo => todo.text === text); // analisamos uno por uno cual tiene el mismo texto, y cuando lo encontremos obtendremos la posicon dentro del array
        
        const newTodos = [...todos]; // creamos un nuevo array con los elementos del original para poner manipularlo
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed; //
    
        // debemos actualizar nuestro estado
        saveTodos(newTodos);
        
        // todos[todoIndex] = {
        //   text: todos[todoIndex].text,
        //   completed: true,
        // }
      };
    
      const deletTodo = (text) => {
          const todoIndex = todos.findIndex(todo => todo.text === text);
          const newTodos = [...todos];
          //para elimnar usamos el metodo .splice()
          // pasamos dos parametros, primero = posicion inicial | segundo = cantidad a eliminar 
          newTodos.splice(todoIndex, 1);  // la posicion inical es el texto de los todos, y el segundo hace referencia a esa posicion
          saveTodos(newTodos); //llmamos a la funcion que guarda nuestros datos en localStorage
      }
    
      // console.log('render (antes de luse)')
      // React.useEffect(() =>{
      //   console.log('use effect');
      //   // al añadir este segundo argunmeto, un array, nos permite definir cuando se ejecutara el useEfect
      // }, [totalTodos]); // al añadir la lista de Todos´s, el use efect esta al pendiente de cualquier cambio dentro de la lista, ejemplo
      //                     // si llegamos a borrar un elemento se activara el use efect
      // console.log('render (luego de luse)')


    return(
        // las dobles llaves hace referecnia a in obejto
        <TodoContext.Provider value = {{
              loading,
              error,
              totalTodos,
              completedTodos,
              searchValue,
              addTodo,
              setSearchValue,
              searchedTodos,
              completeTodo,
              deletTodo,
              openModal,
              setOpenModal,
        }}>        
            {props.children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider};

