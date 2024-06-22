import React from "react";
import Logo from "../../../assetes/logo.png";
import BottomNavigation from "./BottomNavigation";

function CenterNavigation() {
  return (
    <>
      <div className="bg-[#ffe6da]">
        <section className="container mx-auto py-4">
          <nav className="flex flex-col sm:flex-row items-center sm:justify-between">
            <div>
              <img src={Logo} alt="logo" className="max-w-[200px]" />
            </div>

            <div className="flex flex-col items-end text-[#9d1f1a] mt-4 sm:mt-0">
              <p className="text-[27px] font-semibold">TEL: 050-3044-8247</p>
              <span>[Monday to Saturday] 10:00 to 20:00</span>
              <span>[Sundays and Holidays] 10:00 - 20:00</span>
              <span>(We will refrain from serving alcoholic beverages.)</span>
            </div>
          </nav>
        </section>
      </div>

      <div className="bg-[#c1542d] border-b-2">
        <BottomNavigation />
      </div>
    </>
  );
}

export default CenterNavigation;
