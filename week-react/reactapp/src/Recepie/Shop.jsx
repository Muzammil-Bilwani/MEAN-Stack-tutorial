import { useContext } from "react"
import { ShoppingContext } from "../context/ShoppingContext"

export const Shop = () => {
  const { ingredients } = useContext(ShoppingContext)
  return (
    <>
      <h3>Shopping List: {ingredients.length}</h3>
      <ul className="list-decimal	list-inside">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </>
  )
}
