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
        <div class="container" >

    <div class="container list-cont">
        {items.map((d,index)=>
        <div className="list" class="row row_list" key={index}>
            <ToDoList item={d}></ToDoList>
            <button  class="col-lg btn" id={index}  type="button" onClick={()=>removeItem(index)}>x</button>
        </div>
        )}
    </div>

    <form class="container" className="input" onSubmit={handleClick}>
    <div class="row">
        <label class="col-lg" >
            <input  type="text" name="to-do-input" />
        </label>
        <button class="col-lg btnS" type="Submit">Add</button>
    </div>
    </form>

    </div>
    );
}
export default Form;