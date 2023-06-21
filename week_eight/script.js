function deleteTodo(todoNumber) {
  const todoElement = document.getElementById("todo-" + todoNumber)
  todoElement.remove()
}

function addNewsTask() {
  const name = "This is new task"
  const todoList = document.getElementsByClassName("todo-list")
  const todoElement = document.createElement("div")
  todoElement.id = "todo-5"
  todoElement.className = "todo-item"
  todoElement.innerHTML = `
    <p class="todo-task-title">${name}</p>
    <img class="todo-icon" src="./deleteicon.png" onclick="deleteTodo(5)" />
    `
  todoList[0].appendChild(todoElement)
}
