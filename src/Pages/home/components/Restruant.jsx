import React from "react";
import bg1 from "../../../assets/images/background/bar-Oo0o1bk0.jpeg";
import bg2 from "../../../assets/images/background/hashimoto-BSlMvpoA.webp";

function Restruant() {
  return (
    <div className="container mx-auto py-16 ">
      <h2 className="text-center text-3xl font-bold text-[#c1542d]">
        Our Restaurants
      </h2>
      <div className="flex justify-center mt-8 space-x-4">
        <div className="bg-[#f9795f] w-1/2 h-[300px] flex items-center justify-center text-white">
          <img src={bg1} alt="" className="w-full h-full  object-cover" />
        </div>
        <div className="bg-[#f5b251] w-1/2 h-[300px] flex items-center justify-center text-white">
          <img src={bg2} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Restruant;
