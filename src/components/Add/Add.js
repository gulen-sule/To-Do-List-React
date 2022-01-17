import { useState } from "react";
import './Add.css';
import ToDoList from "../ToDo/ToDoList"

function Form(){

    const [items, setItem] = useState(["temizlik","ödev"]);
    
    const handleClick = (event) => {
        event.preventDefault();
        //window.alert(event.target[0].value)
        if(event.target[0].value!=="")
        setItem([...items,event.target[0].value])
        event.target[0].value=""
      }

    function removeItem(index){
        items.splice(index,1)
        setItem([...items])
    }

    return(
    <div class="container">
    <div class="container" className="list-cont">
        {items.map((d,index)=>
        <div class="row row_list" key={index}>
            <div  class="col-11">
                <ToDoList item={d} ></ToDoList>
            </div>
            <div class="col-1">
                <button className="btn_remove" id={index}  type="button" onClick={()=>removeItem(index)}>x</button>
            </div>
        </div>
        )}
    </div>

    <form  onSubmit={handleClick}>
    <div class="container">
    <div class="row" id="add">
        <div class="col-10">
        <label  className="input" >
            <input type="text" name="to-do-input" id="to-do-input" />
        </label>
        </div>
        <div  class="col-2">
        <button className="btn-add" type="Submit">Add</button>
        </div>
    </div>
    </div>
    </form>
    
    </div>
    );
}
export default Form;