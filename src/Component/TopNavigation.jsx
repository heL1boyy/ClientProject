import React from "react";
import Logo from "../assetes/free-all-social-media-ico.png";
import CenterNavigation from "./CenterNavigation";

function TopNavigation() {
  return (
    <>
      <div>
        <nav className=" flex justify-between h-10 w-full bg-orange-200 px-8  items-center">
          <div>
            <p className="pl-[70px]">Welcome to Neupone Reasturant </p>
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
