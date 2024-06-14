import React from "react";

function BottomNavigation() {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center w-full h-[70px] px-8 ">
        <div className="flex items-center">
          <ul className="flex ml-4 space-x-4 uppercase text-lg text-white">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Restaurants</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className="px-4 py-2 rounded-[20px] bg-yellow-500 text-center uppercase">
          Tables Reservation
        </button>
      </nav>
    </div>
  );
}

export default BottomNavigation;
