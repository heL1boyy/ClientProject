import React from "react";
import img from "../../../assets/images/special.png";

function TodaysSpeical() {
  return (
    <section className="bg-[#c1542d]">
      <div className="container mx-auto py-16 ">
        <h2 className="text-center text-2xl font-bold text-white">
          Today's Special
        </h2>
        <div className="flex justify-center mt-8 gap-5 ">
          <div className="bg-[#ececec] p-4 flex flex-col sm:flex-row  items-center sm:justify-evenly w-full ">
            <img src={img} alt="Special 1" />
            <div className="flex flex-col text-4xl text-center ">
              <h1>Butter Naan</h1>
              <p className="mt-4 text-right text-5xl font-bold text-red-600">
                850円
              </p>
            </div>
          </div>
          <div className=" bg-[#ececec] p-4 flex flex-col sm:flex-row   items-center w-full sm:justify-evenly">
            <img src={img} alt="Special 2" />
            <div className="flex flex-col text-center ">
              <h1 className="text-4xl ">Butter Naan</h1>
              <p className="mt-4 font-bold text-right text-red-600 text-5xl ">
                850円
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodaysSpeical;
