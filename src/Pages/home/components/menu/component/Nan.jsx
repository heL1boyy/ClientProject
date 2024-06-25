import React from "react";
import { snacks } from "../../../../../data/dummydata";

const Nan = ({ viewAll }) => {
  const imagesToDisplay = viewAll ? snacks : snacks.slice(0, 4);
  return (
    <div className="grid gap-5 grid-cols-menu-auto-fit">
      {imagesToDisplay.map((snack, index) => (
        <div className=" p-2  rounded-lg  aspect-[4/3]" key={index}>
          <img
            src={snack.img}
            alt="Blog Post One"
            className="w-full h-full object-cover rounded-lg "
          />
        </div>
      ))}
    </div>
  );
};

export default Nan;
