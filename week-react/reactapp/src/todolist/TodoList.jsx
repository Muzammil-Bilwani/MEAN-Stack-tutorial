import { useState } from "react"
import "./todo.css"
import { TodoItem } from "./TodoItem"
import { AddTodo } from "./AddTodo"

export const TodoList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Learn React"
    },
    {
      id: 2,
      title: "Learn Node"
    },
    {
      id: 3,
      title: "Learn Mongo"
    },
    {
      id: 4,
      title: "Learn to be Insan"
    }
  ])

  const deleteTodo = (id) => {
    const toBeDeletedIndex = items.findIndex((item) => item.id === id)
    items.splice(toBeDeletedIndex, 1)
    setItems([...items])
  }

  const addTask = (title) => {
    if (!title) {
      return
    }
    const newTask = { id: items.length + 1, title }
    const newItems = [...items, newTask]
    setItems(newItems)
  }

  return (
    <div>
      <div className="bar">
        <h2 className="heading">Website Todo</h2>
      </div>
      <div className="todo-list shadow-lg">
        {items.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            deleteTodo={() => {
              deleteTodo(item.id)
            }}
          />
        ))}
      </div>
      <AddTodo addTodo={addTask} />
      {/* <button className="todo-add-btn rounded-md" onClick={addTask}>
        + New Task
      </button> */}
    </div>
  )
}
