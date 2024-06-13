import React from "react";

function BottomNavigation() {
  return (
    <div>
      <nav className="flex justify-between  w-full h-[70px] px-8 bg-slate-500  items-center">
        <div className=" bg-slate-500 ">
          <ul className="flex justify-evenly w-full gap-4 uppercase text-lg text-white">
            <li>home</li>
            <li>about us</li>
            <li>our restaurant</li>
            <li>gallery</li>
            <li>contact</li>
          </ul>
        </div>
        <div>
          <button className="px-4 py-2 rounded-[20px] bg-yellow-500 text-center  uppercase">
            tables reservation
          </button>
        </div>
      </nav>
    </div>
  );
}

export default BottomNavigation;
