import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  headers: {
    "X-RapidAPI-Key": "a333f7468bmshfead2de99ce3784p18c72bjsnabd1317b6d93",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.request(options);
      console.log(data.results);
      setRecipes(data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* Search */}
      <form className="max-w-md mx-auto mt-10">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute focus:outline-none inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-indigo-500 focus:outline-none"
            placeholder="Search for delicious recipes..."
            required
          />
          {/* <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button> */}
        </div>
      </form>
      {/* Search */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
