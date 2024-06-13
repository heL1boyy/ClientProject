import React from "react";
import Logo from "../assetes/logo.png";
//import Shape from "../assetes/shape_3.png";
import BottomNavigation from "./BottomNavigation";

function CenterNavigation() {
  return (
    <div className=" relative">
      <nav className="px-8 flex justify-between w-full  pt-2 pb-2 h-[252px] bg-gray-500 ">
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <div>
          <p>TEL: 050-3044-8247</p>
          <p>10:00-20:00</p>
          <p>10:00-20:00</p>
          <p>chinese</p>
          <p>chinese</p>
        </div>
      </nav>
      <div className="  absolute top-[176px] w-full h-[70px]   bg-red-600 ">
        <BottomNavigation />
      </div>
    </div>
  );
}

export default CenterNavigation;
