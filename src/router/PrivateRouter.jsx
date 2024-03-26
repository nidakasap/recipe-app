import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const name = "nida";
  const password = "1234";
  return name === "nida" && password === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
