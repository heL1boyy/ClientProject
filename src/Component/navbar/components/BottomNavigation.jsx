import React, { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function BottomNavigation() {
  const listItem = [
    { listName: "home", route: "/home" },
    { listName: "about ", route: "/aboutus" },
    { listName: "resturant ", route: "/resturant" },
    { listName: "gallery", route: "/gallery" },
    { listName: "contact", route: "/contact" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setIsMenuOpen(false);
  };
  return (
    <div className="container mx-auto ">
      <nav className="flex items-center justify-between w-full py-5 ">
        <div className="flex items-center">
          <ul
            className={`fixed top-0 left-0   w-full h-screen text-[19px] flex flex-col items-center z-50 justify-center bg-black sm:relative sm:flex-row sm:bg-transparent sm:h-auto sm:items-center sm:justify-start gap-7 uppercase text-white  transition-all duration-300  ${
              isMenuOpen ? "block" : "hidden"
            } sm:flex`}
          >
            {listItem.map((listitems, index) => (
              <li
                className={`${activeIndex === index ? "text-[#fbdd47]" : ""}`}
                key={index}
              >
                <Link
                  to={listitems.route}
                  onClick={() => handleItemClick(index)}
                >
                  {listitems.listName}
                </Link>
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
