import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export const RecipeItem = ({ recipe }) => {
  return (
    <Link to={`/details/${recipe.id}`}>
      <div className="shadow-lg rounded-2xl bg-white cursor-pointer hover:shadow-xl transition duration-200">
        <img
          style={{
            objectFit: "contain"
          }}
          className="w-72"
          src={recipe.image}
          alt={recipe.name}
        />
        <h5 className="p-4 font-sans text-2xl">{recipe.name}</h5>
      </div>
    </Link>
  )
}

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
}
