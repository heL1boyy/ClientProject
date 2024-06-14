import React from "react";
import TO from "../assetes/to1.png";
import TOs from "../assetes/to1_copy.png";
import bg from "../assetes/01.png";

function Welcome() {
  return (
    <div>
      <section className="relative container mx-auto ">
        <div>
          <img src={bg} alt="" className=" h-[666px] w-full" />
        </div>
        <div className="  m">
          {/* iamge_section  */}
          <div className="flex   w-full  items-center absolute top-0 m-auto bottom-0  ">
            <div className="relative basis-1/2 ">
              <div className="mx-10">
                <img src={TO} alt="foodimage" className="w-1/2" />
                <img
                  src={TOs}
                  alt="foodimage"
                  className=" w-[266px]  absolute left-[120px] bottom-[-140px]"
                />
              </div>
            </div>

            {/* details part */}
            <div className=" flex basis-1/2 ">
              <div className="mx-10">
                <div className="basis-1/2 m-10 text-center">
                  <h1 className="   text-5xl italic font-extrabold">
                    Welcome to
                  </h1>
                  <span className=" text-5xl italic font-semibold">
                    Nyaupaune
                  </span>
                </div>
                <div className="basis-1/2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia cumque tenetur architecto consequatur aut atque
                    omnis reiciendis fugiat iste voluptatem! Doloribus
                    asperiores adipisci incidunt vitae aperiam consequatur, sunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
