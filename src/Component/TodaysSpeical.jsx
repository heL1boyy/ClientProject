import React from "react";

function TodaysSpeical() {
  return (
    <div className="container mx-auto py-16 bg-orange-100">
      <h2 className="text-center text-3xl font-bold">Today's Special</h2>
      <div className="flex justify-center mt-8 space-x-4">
        <div className="bg-white p-4 flex flex-col items-center">
          <img src="special1.jpg" alt="Special 1" className="w-1/2" />
          <p className="mt-4">850円</p>
        </div>
        <div className="bg-white p-4 flex flex-col items-center">
          <img src="special2.jpg" alt="Special 2" className="w-1/2" />
          <p className="mt-4">850円</p>
        </div>
      </div>
    </div>
  );
}

export default TodaysSpeical;
