import React, { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

function BottomNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <li className="active">
              <Link to="/home" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                onClick={() => setIsMenuOpen(false)}
                className="self-center"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/ourresturant"
                onClick={() => setIsMenuOpen(false)}
                className="text-wrap"
              >
                Restaurants
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={toggleMenu} className="sm:hidden">
          <HiMiniBars3BottomRight size={24} />
        </button>
      </nav>
    </div>
  );
}

export default BottomNavigation;
