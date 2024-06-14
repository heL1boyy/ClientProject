import React from "react";
import heroImage from "../assetes/bg92.png";

function Hero() {
  return (
    <div className="relative ">
      <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl">Welcome to Nyaupane Restaurant</h1>
      </div>
    </div>
  );
}

export default Hero;
