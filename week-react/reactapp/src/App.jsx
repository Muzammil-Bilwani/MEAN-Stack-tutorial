import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleMinus = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <h1>{count}</h1>
      <button onClick={handlePlus}>+</button>
    </div>
  )
}

export default App
