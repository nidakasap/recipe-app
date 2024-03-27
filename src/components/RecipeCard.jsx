import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
          src={recipe.thumbnail_url}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY-1
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
            The Catalyzer
          </h1>
          <p className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div className="flex items-center flex-wrap ">
            <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
