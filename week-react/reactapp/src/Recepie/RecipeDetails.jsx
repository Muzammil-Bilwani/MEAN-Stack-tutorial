import { useParams, useNavigate } from "react-router-dom"
import { recipeList } from "./data"
import {RecipeItem} from "./RecipeItem"

export const RecipeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const recipe = recipeList[id - 1]
  const morerecipes = recipeList.filter((element) => element.id !== recipe.id)
  console.log(morerecipes) 

  return (
    <div>
      <div className="flex justify-between items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            navigate(-1)
          }}
        >
          Back
        </button>
        <h1 className="text-4xl mt-8 mb-8">{recipe.name}</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            style={{
              objectFit: "contain"
            }}
            src={recipe.image}
            alt={recipe.name}
          />
        </div>

        <div>
          <h1 className="text-4xl mt-8 mb-8">Ingredients</h1>
          <ul className="list-decimal	list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div>
          <h1 className="text-4xl mt-8 mb-8">Instructions</h1>
          <ul
            style={{
              textAlign: "justify"
            }}
            className="list-none list-inside"
          >
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
        </div>
        <div><p className="text-4xl mt-8 mb-8">More Recipes</p>
        <div className="grid grid-rows-1 grid-cols-3 gap-4">
          {morerecipes.map((morerecipes,index) =>(
          <RecipeItem key = {index} recipe={morerecipes}/>))}
      </div>
    </div>
    </div>
  )
}
