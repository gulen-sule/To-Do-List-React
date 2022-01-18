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
    <div className="container">
        <div className="row">
            <form  onSubmit={handleClick}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-10">
                    <label  className="input" >
                        <input type="text" id="to-do-input" />
                    </label>
                    </div>
                    <div  className="col-sm-2">
                    <button className="btn-add" type="Submit">Add</button>
                    </div>
                </div>
            </div>
            </form>
        </div>

        <div className="row">
        <ul>
            {items.map((d,index)=>
            <div className="col-12" key={index}>
                <li className="row row_list">
                    <div className="col-2" >
                        <input type="checkbox"  id="check1" />
                    </div>
                    <div  className="col-9">
                        <ToDoList item={d} ></ToDoList>
                    </div>
                    <div className="col-1">
                        <button className="btn_remove" id={index}  type="button" onClick={()=>removeItem(index)}>x</button>
                    </div>
                </li>
            </div>
            )}
        </ul>
        </div>
    </div>
    );
}
export default Form;