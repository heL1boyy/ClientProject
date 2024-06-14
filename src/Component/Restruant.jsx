import React from "react";

function Restruant() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-center text-3xl font-bold">Our Restaurants</h2>
      <div className="flex justify-center mt-8 space-x-4">
        <div className="bg-[#f9795f] w-1/2 h-64 flex items-center justify-center text-white">
          Namaste Kitchen Cafe & Bar
        </div>
        <div className="bg-[#f5b251] w-1/2 h-64 flex items-center justify-center text-white">
          Namaste Kitchen Miwi Hashimoto
        </div>
      </div>
    </div>
  );
}

export default Restruant;
