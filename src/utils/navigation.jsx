import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import RecipeDetail from "../pages/RecipeDetail";

export const routes = [
  { path: "/", name: "Home", element: <Home />, isPrivate: true },
  {
    path: "/recipe-detail",
    name: "RecipeDetails",
    element: <RecipeDetail />,
    isPrivate: true,
  },
  { path: "/login", name: "Login", element: <Login />, isPrivate: false },
  {
    path: "/not-found",
    name: "NotFound",
    element: <NotFound />,
    isPrivate: false,
  },
];
