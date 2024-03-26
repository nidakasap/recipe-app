import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import RecipeDetail from "../pages/RecipeDetail";
import Login from "../pages/Login";
import Navbar from "../components/navbar/Navbar";
import NotFound from "../pages/NotFound";
import { routes } from "../utils/navigation";
import { useUser } from "../utils/AuthWrapper";

const AppRouter = () => {
  const { user } = useUser();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map((route, index) => {
          if (!route.isPrivate || (route.isPrivate && user)) {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          }
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
