import React from "react";
import TO from "../../../assetes/to1.png";
import TOs from "../../../assetes/to1_copy.png";
// import bg from "../assetes/01.png";

function Welcome() {
  return (
    <div className="bg-hero-pattern bg-cover px-12 py-24">
      <section className=" container mx-auto    ">
        {/* iamge_section  */}
        <div className="grid gap-10 grid-cols-auto-fit-minmax  ">
          <div className="relative ">
            {/* img1 */}
            <div className=" absolute left-5 w-[70%] h-4/5">
              <img
                src={TO}
                alt="foodimage"
                className="w-full h-full object-cover"
              />
            </div>

            {/* img2 */}
            <div className=" absolute w-[55%] h-3/5 right-0 bottom-0">
              <img
                src={TOs}
                alt="foodimage"
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
          {/* details part */}
          <div className=" flex justify-center items-center m-2 w-full h-full">
            <div className="mx-10">
              <div className="  text-center mb-6 h-max">
                <h1 className="   text-[50px]   italic font-bold pt-[100px]">
                  Welcome to
                </h1>

                <span className=" text-[50px] italic font-semibold text-[#f5b251]">
                  Nyaupaune
                </span>
              </div>
              <div className="">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia cumque tenetur architecto consequatur aut atque omnis
                  reiciendis fugiat iste voluptatem! Doloribus asperiores
                  adipisci incidunt vitae aperiam consequatur, sunt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
