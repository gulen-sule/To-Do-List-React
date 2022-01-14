import { useState } from "react";
import './Add.css';
import ToDoList from "../ToDo/ToDoList"

function Form(){

    const [items, setItem] = useState(["temizlik","ödev"]);
    
    const handleClick = (event) => {
        event.preventDefault();
        //window.alert(event.target[0].value)
        if(event.target[0].value!="")
        setItem([...items,event.target[0].value])
        event.target[0].value=""
      }

    function removeItem(index){
        items.splice(index,1)
        setItem([...items])
    }

    return(
        <div>
    <form className="input" onSubmit={handleClick}>
        <label>
            <input type="text" name="to-do-input" />
        </label>
        <button type="Submit">Add</button>
    </form>

    <div>
        {items.map((d,index)=>
        <div className="list" key={index}>
            <ToDoList item={d}></ToDoList>
            <button id={index}  type="button" onClick={()=>removeItem(index)}>-</button>
        </div>
        )}
    </div>
    </div>
    );
}
export default Form;