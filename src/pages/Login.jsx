import { useState } from "react";
import { useUser } from "../utils/AuthWrapper";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const isLogedIn = login(email, password);

    if (isLogedIn) {
      setError(false);

      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center mb-6 w-full ">
      <div className="bg-white shadow-md rounded-lg p-20">
        <h1 className="text-2xl font-bold text-center">Welcome!</h1>
        <h2 className="text-neutral-700	font-bold text-center mb-5">
          Let's login to explore recipes
        </h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              for="email"
              className=" text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your@email.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-7">
            <label
              for="password"
              class="text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          {error && <p>Incorrect mail or password.</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
