import React from "react";
import Logo from "../assetes/free-all-social-media-ico.png";
import CenterNavigation from "./CenterNavigation";

function TopNavigation() {
  return (
    <>
      <div className=" bg-[#fbd597] ">
        <nav className=" flex justify-between h-10 w-full container mx-auto   items-center">
          <div>
            <p>Welcome to Neupone Reasturant </p>
          </div>

          <div>
            <img src={Logo} alt="Logo " />
          </div>
        </nav>
      </div>
      <CenterNavigation />
    </>
  );
}

export default TopNavigation;
