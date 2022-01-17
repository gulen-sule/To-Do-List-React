import PropTypes from "prop-types"

function ToDoList({item}){
return(
<div id="item"> {item}</div>
)
}

ToDoList.propTypes={
    item:PropTypes.string
}
export default ToDoList