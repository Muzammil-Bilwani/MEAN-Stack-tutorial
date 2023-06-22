/* eslint-disable react/prop-types */
import DeleteIcon from "../assets/deleteicon.png"
import DoneIcon from "../assets/done.png"
import "./todo.css"

export const TodoItem = ({ title, isDone, deleteTodo, completeTodo }) => {
  return (
    <div className="todo-item" id="todo-1">
      <p
        className="todo-task-title"
        style={
          isDone
            ? {
                textDecoration: "line-through"
              }
            : {}
        }
      >
        {title}
      </p>
      <div
        style={{
          display: "flex"
        }}
      >
        <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
        <img className="todo-icon" src={DoneIcon} onClick={completeTodo} />
      </div>
    </div>
  )
}
