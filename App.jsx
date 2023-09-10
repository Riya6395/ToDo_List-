import React ,{useState}from 'react';
import Todo from './Todo';

const App = () => {

   const [inputList, setInputList]=useState("");
   const [Items, setItems]= useState([]);


   const itemEvent = (event) =>{
   setInputList(event.target.value);
   };


   const ItemsList=()=>{
    setItems((oldItems)=>{
        return[...oldItems, inputList];
    });
    setInputList("");
   };
   const deleteItems =(id)=>{
    setItems((oldItems)=>{
        return(oldItems.filter((arrElem,index) => {
               return index !== id;
        }));
    });
   };
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                     <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text" placeholder="Add The Item" value={inputList} onChange={itemEvent}/>
                    <button onClick={ItemsList}> + </button>
                    <ol>
                    {/* <li>{inputList}</li> */}
                     {Items.map (( value,index )=>{             
                     return(
                       <Todo
                       text={value}
                       key={index}
                       id={index}  
                       onSelect={deleteItems}
                        />
                     )
                     })}
                    </ol>
                </div>
            </div>

        </>
    );
};

export default App;
