import React from "react";
import Logo from "../../../assetes/logo.png";
import BottomNavigation from "./BottomNavigation";

import shape1 from "../../../assets/images/shape1.png";
import shape2 from "../../../assets/images/shape2.png";
import shape3 from "../../../assets/images/shape3.png";

function CenterNavigation() {
  return (
    <>
      <div className="bg-[#ffe6da]">
        <section className="container mx-auto py-1">
          <nav className="flex flex-col sm:flex-row items-center sm:justify-between relative ">
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

          {/* <img
            src={shape1}
            alt=""
            className="absolute top-12 left-40  size-10 "
          />
          <img src={shape2} alt="" className="absolute" />
          <img src={shape3} alt="" className="absolute" /> */}
        </section>
      </div>

      <div className="bg-[#c1542d] border-b-2">
        <BottomNavigation />
      </div>
    </>
  );
}

export default CenterNavigation;
