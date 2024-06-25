import React, { useState } from "react";
import { Link } from "react-router-dom";
import Snacks from "./component/Snacks";
import Lunch from "./component/Lunch";
import Seafood from "./component/Seafood";
import Drinks from "./component/Drinks";
import Salad from "./component/Salad";
import Vetegable from "./component/Vetegable";
import Bbq from "./component/Bbq";
import Mutton from "./component/Mutton";
import Chicken from "./component/Chicken";
import Nan from "./component/Nan";

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("lunchMenu");
  const [viewAll, setViewAll] = useState(false);

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    setViewAll(false); // Reset viewAll when changing category
  };

  const handleViewAllClick = () => {
    setViewAll(true);
  };

  const getButtonClass = (category) =>
    `py-2 px-4 rounded ${
      selectedCategory === category
        ? "bg-white text-[#c1542d]"
        : "bg-[#c1542d] text-white"
    }`;

  return (
    <section className="bg-menu-section-bg bg-cover">
      <div className="container mx-auto py-16  h-full">
        <h2 className="text-center text-3xl font-bold mb-8 text-[#c1542d]">
          Menus
        </h2>
        <div className="flex justify-center items-center gap-3 mb-8 flex-wrap">
          <button
            className={getButtonClass("lunchMenu")}
            onClick={() => handleButtonClick("lunchMenu")}
          >
            Lunch Menu
          </button>
          <button
            className={getButtonClass("seaFoodCurry")}
            onClick={() => handleButtonClick("seaFoodCurry")}
          >
            SeaFood Curry
          </button>
          <button
            className={getButtonClass("drinkMenu")}
            onClick={() => handleButtonClick("drinkMenu")}
          >
            Drink Menu
          </button>
          <button
            className={getButtonClass("snacksMenu")}
            onClick={() => handleButtonClick("snacksMenu")}
          >
            Snacks Menu
          </button>
          <button
            className={getButtonClass("saladSoup")}
            onClick={() => handleButtonClick("saladSoup")}
          >
            Salad Soup
          </button>
          <button
            className={getButtonClass("vegetableCurry")}
            onClick={() => handleButtonClick("vegetableCurry")}
          >
            Vegetable Curry
          </button>
          <button
            className={getButtonClass("bbq")}
            onClick={() => handleButtonClick("bbq")}
          >
            BBQ
          </button>
          <button
            className={getButtonClass("muttonCurry")}
            onClick={() => handleButtonClick("muttonCurry")}
          >
            Mutton Curry
          </button>
          <button
            className={getButtonClass("chickenCurry")}
            onClick={() => handleButtonClick("chickenCurry")}
          >
            Chicken Curry
          </button>
          <button
            className={getButtonClass("nanCurry")}
            onClick={() => handleButtonClick("nanCurry")}
          >
            Nan Curry
          </button>
        </div>

        {selectedCategory === "lunchMenu" && <Lunch viewAll={viewAll} />}
        {selectedCategory === "seaFoodCurry" && <Seafood viewAll={viewAll} />}
        {selectedCategory === "drinkMenu" && <Drinks viewAll={viewAll} />}
        {selectedCategory === "snacksMenu" && <Snacks viewAll={viewAll} />}
        {selectedCategory === "saladSoup" && <Salad viewAll={viewAll} />}
        {selectedCategory === "vegetableCurry" && (
          <Vetegable viewAll={viewAll} />
        )}
        {selectedCategory === "bbq" && <Bbq viewAll={viewAll} />}
        {selectedCategory === "muttonCurry" && <Mutton viewAll={viewAll} />}
        {selectedCategory === "chickenCurry" && <Chicken viewAll={viewAll} />}
        {selectedCategory === "nanCurry" && <Nan viewAll={viewAll} />}

        <div className="flex justify-center mt-8 font-semibold">
          <button className="px-12 py-2 rounded-full text-[#c1542d] uppercase border-[#c1542d] border-2 hover:bg-[#c1542d] hover:text-white transition-all duration-500 ease-in-out">
            <Link to="/menu" onClick={handleViewAllClick}>
              View Details
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
