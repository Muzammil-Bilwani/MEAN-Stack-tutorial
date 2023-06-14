import { RecipeItem } from "./RecipeItem"

const recipeList = [
  {
    id: 1,
    name: "Tikka Boti Paratha Roll",
    image:
      "https://www.foodfusion.com/wp-content/uploads/2023/05/YT_01-3-600x449.jpg?v=1686660324"
  },
  {
    id: 2,
    name: "Roti Triangles/Samosa",
    image:
      "https://www.foodfusion.com/wp-content/uploads/2023/05/YT3-5-600x449.jpg?v=1686553309"
  },
  {
    id: 3,
    name: "Egg & Cheese Toast",
    image:
      "https://www.foodfusion.com/wp-content/uploads/2023/05/YT_01-2-600x449.jpg?v=1686122618"
  },
  {
    id: 4,
    name: "Chicken Manchurian",
    image:
      "https://www.foodfusion.com/wp-content/uploads/2017/04/P1090008-600x450.jpg?v=1587767800"
  }
]

export const RecipeHome = () => {
  return (
    <div>
      <h1 className="text-4xl mt-8 mb-8">Recipe</h1>
      <div className="grid grid-rows-2 grid-cols-2 gap-12">
        {recipeList.map((recipe, index) => (
          <RecipeItem key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}
