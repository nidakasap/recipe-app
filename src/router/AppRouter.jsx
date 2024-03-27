import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
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
