import { useParams, useNavigate } from "react-router-dom";
import { recipeList } from "./data";
import { RecipeItem } from "./RecipeItem";

export const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipeList[id - 1];

  return (
    <div className="p-8">
      <div className="flex flex-row justify-between h-12 mb-4">
        <button
          className=" px-8 py-2 text-white text-2xl text-white-600 bg-blue-500 font-semibold rounded-full border border-white-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
        <h1 className="text-4xl font-semibold mt-8 mb-8 mr-24 underline ">{recipe.name}</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="">
          <img
            style={{
              objectFit: "contain",
            }}
            src={recipe.image}
            alt={recipe.name}
          />
        </div>

        <div className="text-left ml-8">
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
          <h1 className="text-4xl font-semibold mt-8 mb-8">Instructions</h1>
          <ul
            style={{
              textAlign: "justify",
            }}
            className="list-none list-inside"
          >
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="">
        <h1 className="text-4xl font-bold underline">More may you like</h1>
        <div className="flex gap-12 m-4">
          {recipeList.map((recipe, index) => (
            <RecipeItem key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};
