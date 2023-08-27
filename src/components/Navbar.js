import React from "react";
import { categories } from "../utils/constants";

function Navbar({setSelectedCategory}) {
  return (
    <nav className="relative bg-black py-2">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {categories.map((category) => (
          <h2
            key={category.id}
            onClick={() => setSelectedCategory(category.name)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-90 text-white active:text-red-500"
          >
            {category.name}
          </h2>
        ))}
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-12"></div>
      </div>
    </nav>
  );
}

export default Navbar;
