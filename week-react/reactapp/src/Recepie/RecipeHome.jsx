import { RecipeItem } from "./RecipeItem"
import { recipeList } from "./data"
import { RecipeItem } from "./RecipeItem";
import { recipeList } from "./data";

export const RecipeHome = () => {
  return (
    <div>
      <h1 className="text-4xl mt-8 mb-8">Recipe</h1>
      <div className="grid grid-rows-2 grid-cols-2 gap-12">
    <div className="m-6 p-6 content-center">
      <h1 className="text-4xl mb-8">Recipe</h1>
      <div className="grid grid-rows-2 grid-cols-2 gap-10 justify-items-center ">
        {recipeList.map((recipe, index) => (
          <RecipeItem key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}
  );
};