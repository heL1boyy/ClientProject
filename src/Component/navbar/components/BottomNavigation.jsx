import React, { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function BottomNavigation() {
  const listItem = [
    { listName: "home", route: "/home" },
    { listName: "about", route: "/aboutus" },
    {
      listName: "restaurant",

      item1: "Namaste Kitchen Cafe & Bar",
      item2: "Namaste Kitchen Miwi Hashimoto",
    },
    { listName: "gallery", route: "/gallery" },
    { listName: "contact", route: "/contact" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between w-full py-5">
        <div className="flex items-center">
          <ul
            className={`fixed top-0 left-0 w-full h-screen text-[19px] flex flex-col items-center z-50 justify-center bg-black sm:relative sm:flex-row sm:bg-transparent sm:h-auto sm:items-center sm:justify-start gap-7 uppercase text-white transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            } sm:flex`}
          >
            {listItem.map((listitems, index) => (
              <li
                className={`${activeIndex === index ? "text-[#fbdd47]" : ""} ${
                  listitems.class ? listitems.class : ""
                }`}
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <Link
                  to={listitems.route}
                  onClick={() => handleItemClick(index)}
                >
                  {listitems.listName}
                </Link>
                {index === hoveredIndex &&
                  listitems.item1 &&
                  listitems.item2 && (
                    <ul
                      className="absolute bg-orange-100 rounded-box z-10 top-full mt-2 w-max p-4 text-black text-[17px] "
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <li className="mb-2">
                        <Link to="/namastekitchencafe&bar">
                          {listitems.item1}
                        </Link>
                      </li>
                      <li>
                        <Link to="/namastekitchenmiwihashimoto">
                          {listitems.item2}
                        </Link>
                      </li>
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={toggleMenu} className="sm:hidden z-50">
          {!isMenuOpen ? (
            <HiMiniBars3BottomRight size={24} color="white" />
          ) : (
            <RxCross2 size={24} color="white" />
          )}
        </button>
      </nav>
    </div>
  );
}

export default BottomNavigation;
