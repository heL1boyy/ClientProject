import React from "react";
import heroImage from "../../../../assetes/bg92.png";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomArrows.scss";

function Hero() {
  const NextArrow = ({ className, style, onClick }) => {
    return (
      <div
        className={`${className} custom-arrow custom-next`}
        style={{ ...style }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right"></i> {/* Using Font Awesome icon */}
      </div>
    );
  };
  const PrevArrow = ({ className, style, onClick }) => {
    return (
      <div
        className={`${className} custom-arrow custom-prev`}
        style={{ ...style }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left"></i> {/* Using Font Awesome icon */}
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative  ">
      <Slider {...settings}>
        <img
          src={heroImage}
          alt="Hero"
          className="w-full max-h-[70vh] object-cover brightness-75  "
        />
        <img
          src={heroImage}
          alt="Hero"
          className="w-full max-h-[70vh] object-cover brightness-75  "
        />
        <img
          src={heroImage}
          alt="Hero"
          className="w-full max-h-[70vh] object-cover brightness-75  "
        />
      </Slider>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="absolute  flex  flex-col justify-center gap-6 top-[12%] left-12  sm:top-[30%] sm:left-24 md:left-36 "
      >
        <h1 className="text-[#c1542d] text-3xl sm:text-4xl md:text-5xl  font-bold  w-max transition-all duration-500  ">
          Welcome to
        </h1>
        <span className="text-4xl sm:text-5xl md:text-6xl text-[#fbd597] font-[900]  w-max transition-all duration-500 ">
          Neupane Kitchen
        </span>
        <button className="text-black rounded-md  py-[10px] px-[15px] sm:py-[12.5px] sm:px-[20px] md:py-4 md:px-6 bg-white  w-max text-[12px] uppercase font-bold transition-all duration-500 ">
          Learn More
        </button>
      </motion.div>
    </div>
  );
}

export default Hero;
