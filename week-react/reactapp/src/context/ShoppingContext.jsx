/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const ShoppingContext = createContext()

export const ShoppingProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([])

  return (
    <ShoppingContext.Provider value={{ ingredients, setIngredients }}>
      {children}
    </ShoppingContext.Provider>
  )
}
