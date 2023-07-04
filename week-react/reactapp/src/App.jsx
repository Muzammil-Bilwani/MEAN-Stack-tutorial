import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RecipeDetails } from "./Recepie/RecipeDetails"
import { RecipeHome } from "./Recepie/RecipeHome"
import { Shop } from "./Recepie/Shop"
import { Weather } from "./weather/Weather"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Weather />,
    errorElement: (
      <>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </>
    )
  },
  {
    path: "/details/:id",
    element: <RecipeDetails />
  },
  {
    path: "/shop",
    element: <Shop />
  }
])
function App() {
  return <RouterProvider router={router} />
}

export default App
