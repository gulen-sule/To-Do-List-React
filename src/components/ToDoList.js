import PropTypes from "prop-types"

function ToDoList({item}){
return(
<> {item}</>
)
}

ToDoList.propTypes={
    item:PropTypes.string
}
export default ToDoList