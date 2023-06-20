import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RecipeDetails } from "./Recepie/RecipeDetails"
import { RecipeHome } from "./Recepie/RecipeHome"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipeHome />,
    errorElement: (
      <>
        <h1>Handle Error</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </>
    )
  },
  {
    path: "/details/:id",
    element: <RecipeDetails />
  }
])
function App() {
  return <RouterProvider router={router} />
}

export default App
