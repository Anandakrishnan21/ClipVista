import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Feed from "./Feed";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div>
      <div className="sticky top-0 z-[1]">
        <Header />
        <Navbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <Feed selectedCategory={selectedCategory} />
    </div>
  );
}

export default Home;
