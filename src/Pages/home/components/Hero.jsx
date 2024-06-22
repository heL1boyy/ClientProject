import React from "react";
import heroImage from "../../../assetes/bg92.png";

function Hero() {
  return (
    <div className="relative  ">
      <img
        src={heroImage}
        alt="Hero"
        className="w-full max-h-[70vh] object-cover brightness-75  "
      />
      <div className="absolute  flex  flex-col justify-center gap-6 top-[30%] left-24 ">
        <h1 className="text-[#c1542d] text-5xl font-bold  w-max">Welcome to</h1>
        <span className="text-6xl text-[#fbd597] font-[900]  w-max">
          Neupane Kitchen
        </span>
        <button className="text-black rounded-md  py-[15px] px-[25px] bg-white  w-max text-[12px] uppercase font-bold">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Hero;
