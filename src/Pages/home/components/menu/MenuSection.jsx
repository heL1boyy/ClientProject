import React from "react";
import WhiteShape from "../../../../assetes/white_shape_4.png";
import WhiteShape1 from "../../../../assetes/white_shape_3.png";
import WhiteShape2 from "../../../../assetes/white_shape_2.png";
import { Link } from "react-router-dom";
// import Snacks from "./component/Snacks";

const blogPosts = [
  {
    id: 1,
    image: WhiteShape,
    title: "Blog Post One",
    description: "Read More",
  },
  {
    id: 2,
    image: WhiteShape1,
    title: "Blog Post Two",
    description: "Read More",
  },
  {
    id: 3,
    image: WhiteShape2,
    title: "Blog Post Three",
    description: "Read More",
  },
  {
    id: 4,
    image: WhiteShape2,
    title: "Blog Post One",
    description: "Read More",
  },
];

function MenuSection() {
  return (
    <>
      <section className="bg-menu-section-bg bg-cover">
        <div className="container  mx-auto py-16">
          <h2 className="text-center text-3xl font-bold mb-8 text-[#c1542d]">
            Menus
          </h2>
          <div className="flex justify-center items-center gap-3 mb-8 flex-wrap ">
            <button className="bg-[#c1542d] text-white py-2 px-4 rounded ">
              Lunch Menu
            </button>
            <button className="bg-[#c1542d] text-white py-2 px-4 rounded">
              SeaFood Curry
            </button>
            <button className="bg-[#c1542d] text-white py-2 px-4 rounded">
              Drink Menu
            </button>
            <button className="bg-[#c1542d] text-white py-2 px-4 rounded ">
              <Link to="/snacks"> Snacks Menu</Link>
            </button>
            <button className="bg-[#c1542d] text-white py-2 px-4 rounded">
              Salad Soup
            </button>
            <button className="bg-[#c1542d] text-white py-2 px-4 rounded">
              Vetegable Curry
            </button>
            <button className="bg-[#c1542d] text-white py-2 px-4 rounded">
              BBQ
            </button>
            <button className="bg-[#c1542d] text-white py-2 px-4 rounded">
              Mutton Curry
            </button>
            <button className="bg-[#c1542d] text-white py-2 px-4 rounded">
              Chicken Curry
            </button>
            <button className="bg-[#c1542d] text-white py-2 px-4 rounded">
              Nan Curry
            </button>
          </div>

          <div className="grid gap-5 grid-cols-menu-auto-fit">
            {blogPosts.map((post) => (
              <div className=" p-4 rounded-lg ">
                <img
                  src={post.image}
                  alt="Blog Post One"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 font-semibold">
            <button className="px-12 py-2 rounded-full  text-[#c1542d] uppercase border-[#c1542d] border-2  hover:bg-[#c1542d] hover:text-white transition-all duration-500 ease-in-out">
              View Details
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuSection;
