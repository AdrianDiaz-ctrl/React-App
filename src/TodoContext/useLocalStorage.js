import React from 'react'

function useLocalStorage(itemName, initialValue) {

    //Lo inicio como un objeto con ambos estados, error y false
    //   const [dataStatus,setDataStatus] = useState({loading:true,error:false})
    
    // y lo edito de esta forma, para evitar la sobreescritura.
    //Para editar solo el loading
    //  setDataStatus({...dataStatus,loading:false})
    //Para editar solo el error
    // setDataStatus({...dataStatus,error:true})
    //Para editar ambos  ヽ(•‿•)ノ
    //  setDataStatus({loading:false,error:false})
    
      const [error, setError] = React.useState(false);
      const [loading, setLoading] = React.useState(true);
    
      const [item, setItem] = React.useState(initialValue); // nuestro estado inicial
    
      React.useEffect(() => {
          setTimeout(() => {
            try{
                // localStorage => una base local del navegador que permite guarda datos pero solo en tipo string
              const localStorageItem = localStorage.getItem(itemName); // obtenemos el primer elmento de local storage
              let parsedItem;
                
              if (!localStorageItem){ // !localStorage => si no existe nada
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
              }else{ 
                // en caso de que ya alla algo en local storage
                parsedItem = JSON.parse(localStorageItem) // transformamos el string guardado en local storage en un json
              }
    
              setItem(parsedItem);
              setLoading(false);
          
          } catch{
              setError(error)
            }
        }, 1000)
      });
    
        const saveItem = (newItem) => {
          try{
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
          }catch{
            setError(error)
          }
        };
        
        return{
          item,
          saveItem,
          loading,
          error,
        };
    }

export {useLocalStorage};