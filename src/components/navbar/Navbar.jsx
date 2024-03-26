import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../utils/AuthWrapper";

const Navbar = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <a href="#" className="text-2xl no-underline hover:text-indigo-500">
            RecipeApp
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-lg ml-7 font-medium hover:text-indigo-700 text-indigo-500"
          >
            All Recipes
          </a>
          <a
            href="#"
            className="text-lg ml-7 font-medium hover:text-indigo-500"
          >
            Something
          </a>
          {user && (
            <button
              className="text-lg ml-7 py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              onClick={() => handleLogout()}
            >
              Log Out
            </button>
          )}
          {!user && (
            <Link
              to={"/login"}
              className="text-lg ml-7 py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Log In
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
