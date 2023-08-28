import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { SearchIcon, SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

function Header() {
  const { toggle, mode } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="w-full sticky top-0 z-[1] p-2 bg-black text-white">
      <div className="w-full flex items-center justify-between p-2">
        <div className="text-2xl font-semibold flex flex-row items-center gap-2">
          <p>Clip<span className="text-red-600">Vista</span></p>
        </div>
        <div className="flex items-center justify-center">
          <div onClick={toggle}>
            {mode === "dark" ? (
              <SunIcon className="bg-black h-8" />
            ) : (
              <MoonIcon className="bg-black h-8" />
            )}
          </div>
          <form
            onSubmit={onHandleSubmit}
            className="w-8/12 md:w-full flex flex-row items-center"
          >
            <input
              type="text"
              placeholder="Search here.."
              className="w-full h-8 p-2 flex justify-center text-black bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="text-black h-8 flex justify-center items-center">
              <SearchIcon className="bg-white h-8" />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
