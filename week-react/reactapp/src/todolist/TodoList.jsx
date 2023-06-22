import { useEffect, useState } from "react"
import "./todo.css"
import { TodoItem } from "./TodoItem"
import { AddTodo } from "./AddTodo"

export const TodoList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Learn React",
      isDone: false
    },
    {
      id: 2,
      title: "Learn Node",
      isDone: false
    },
    {
      id: 3,
      title: "Learn Mongo",
      isDone: false
    },
    {
      id: 4,
      title: "Learn to be Insan",
      isDone: false
    }
  ])

  const [doneCount, setDoneCount] = useState(0)

  useEffect(() => {
    const doneItems = items.filter((item) => item.isDone)
    setDoneCount(doneItems.length)
  }, [items])

  const deleteTodo = (id) => {
    const toBeDeletedIndex = items.findIndex((item) => item.id === id)
    items.splice(toBeDeletedIndex, 1)
    setItems([...items])
  }

  const addTask = (title) => {
    if (!title) {
      return
    }
    const newTask = { id: items.length + 1, title, isDone: false }
    const newItems = [...items, newTask]
    setItems(newItems)
  }

  const doneTodo = (id) => {
    const todoItem = items.find((item) => item.id === id)
    todoItem.isDone = true
    setItems([...items])
  }

  return (
    <div>
      <div className="bar">
        <h2 className="heading">Website Todo</h2>
      </div>
      <div>
        <h2 className="heading">Done Task: {doneCount}</h2>
      </div>
      <div className="todo-list shadow-lg">
        {items.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            isDone={item.isDone}
            deleteTodo={() => {
              deleteTodo(item.id)
            }}
            completeTodo={() => {
              doneTodo(item.id)
            }}
          />
        ))}
      </div>
      <AddTodo addTodo={addTask} />
    </div>
  )
}
