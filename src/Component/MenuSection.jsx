import React from "react";
import WhiteShape from "../assetes/white_shape_4.png";
import WhiteShape1 from "../assetes/white_shape_3.png";
import WhiteShape2 from "../assetes/white_shape_2.png";

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
  {
    id: 5,
    image: WhiteShape1,
    title: "Blog Post Two",
    description: "Read More",
  },
  {
    id: 6,
    image: WhiteShape,
    title: "Blog Post Three",
    description: "Read More",
  },
];

function MenuSection() {
  return (
    <div className="container  mx-auto py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Menus</h2>
      <div className="flex justify-center space-x-4 mb-8 flex-wrap">
        <button className="bg-[#fbd597] text-white py-2 px-4 rounded ">
          All Menu
        </button>
        <button className="bg-[#c1542d] text-white py-2 px-4 rounded">
          Lunch Menu
        </button>
        <button className="bg-[#fbd597] text-white py-2 px-4 rounded">
          Dinner Menu
        </button>
        <button className="bg-[#fbd597] text-white py-2 px-4 rounded">
          Party Menu
        </button>
        <button className="bg-[#fbd597] text-white py-2 px-4 rounded">
          Drink Menu
        </button>
        <button className="bg-[#fbd597] text-white py-2 px-4 rounded">
          Snack Menu
        </button>
      </div>

      <div className=" container mx-auto ">
        <div className="grid gap-4 grid-cols-1  sm:grid-cols-2 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div className=" p-4 rounded-lg ">
              <div className=" aspect-[4/3] p-8">
                <img
                  src={post.image}
                  alt="Blog Post One"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="font-bold mt-4 text-center">Blog Post One</h3>
              <p className="mt-2 text-center text-blue-500 cursor-pointer">
                Read More
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-12 py-2 rounded-full  text-[#c1542d] uppercase border-[#c1542d] border-4 font-bold">
          View Details
        </button>
      </div>
    </div>
  );
}

export default MenuSection;
