/* eslint-disable react/prop-types */
import { useState } from "react"
import "./todo.css"

export const AddTodo = ({ addTodo }) => {
  const [newTask, setNewTask] = useState("")

  const onChange = (e) => {
    setNewTask(e.target.value)
  }

  return (
    <div className="add-todo">
      <input
        className="input-field"
        type="text"
        placeholder="Enter the task title"
        value={newTask}
        onChange={onChange}
      />
      <button
        className="todo-add-btn rounded-md"
        onClick={() => {
          addTodo(newTask)
          setNewTask("")
        }}
      >
        + New Task
      </button>
    </div>
  )
}
