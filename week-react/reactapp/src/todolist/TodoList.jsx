import { useState } from "react"
import "./todo.css"
import { TodoItem } from "./TodoItem"

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

  return (
    <div>
      <div className="bar">
        <h2 className="heading">Website Todo</h2>
      </div>
      <div className="todo-list shadow-lg">
        {items.map((item) => (
          <TodoItem key={item.id} title={item.title} />
        ))}
      </div>
    </div>
  )
}
