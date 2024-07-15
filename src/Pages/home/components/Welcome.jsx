import React from "react";
import TO from "../../../assetes/to1.png";
import TOs from "../../../assetes/to1_copy.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import bg from "../assetes/01.png";

function Welcome() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  return (
    <div className="bg-hero-pattern bg-cover md:px-12 py-24">
      <section ref={ref} className=" container mx-auto    ">
        {/* iamge_section  */}
        <div className="grid gap-10  md:grid-cols-auto-fit-minmax  ">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="relative "
          >
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
          </motion.div>
          {/* details part */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className=" flex justify-center items-center lg:m-2 w-full h-full"
          >
            <div className="mx-10">
              <div className="  text-center mb-6 h-max">
                <h1 className="   text-[50px]   italic font-bold lg:pt-[100px]">
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
