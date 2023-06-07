/* eslint-disable react/prop-types */
import DeleteIcon from "../assets/deleteicon.png"
import "./todo.css"

export const TodoItem = ({ title, deleteTodo }) => {
  return (
    <div className="todo-item" id="todo-1">
      <p className="todo-task-title">{title}</p>
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
    </div>
  )
}
