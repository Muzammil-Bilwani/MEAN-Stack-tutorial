const Recipe = {
  id: 1,
  name: "Tikka Boti Paratha Roll",
  image:
    "https://www.foodfusion.com/wp-content/uploads/2023/05/YT_01-3-600x449.jpg?v=1686660324",
  ingredients: [
    "Chicken Boneless ½ kg",
    "Adrak Lehsan Paste 1 tbs",
    "Lal Mirch Powder 1 tsp",
    "Zeera Powder 1 tsp",
    "Dhania Powder 1 tsp",
    "Garam Masala Powder ½ tsp",
    "Namak 1 tsp or to taste",
    "Lemon Juice 1 tbs",
    "Dahi 2 tbs",
    "Oil 2 tbs",
    "Pyaz (Onion) Chopped 1 medium",
    "Hara Dhania (Fresh Coriander) Chopped 2 tbs",
    "Hari Mirch (Green Chilies) Chopped 2 tbs"
  ],
  instructions: [
    "1. In bowl,add chicken boneless,ginger garlic paste,red chili powder,cumin powder,coriander powder,garam masala powder,salt,lemon juice,yogurt and mix well,cover and marinate for 30 minutes.",
    "2. In frying pan,add oil and marinated chicken,mix well and cook until chicken is done (approx. 8-10 minutes) then cook on high flame until oil separates.",
    "3. Add onion,fresh coriander,green chilies and mix well.",
    "4. On paratha,add prepared chicken tikka,roll and serve."
  ]
}

export const RecipeDetails = () => {
  return (
    <div>
      <h1 className="text-4xl mt-8 mb-8">{Recipe.name}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            style={{
              objectFit: "contain"
            }}
            src={Recipe.image}
            alt={Recipe.name}
          />
        </div>

        <div>
          <h1 className="text-4xl mt-8 mb-8">Ingredients</h1>
          <ul className="list-decimal	list-inside">
            {Recipe.ingredients.map((ingredient, index) => (
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
            {Recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
