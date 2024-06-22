import React from "react";
import Logo from "../../assetes/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function Footer() {
  const listitems = [
    { listname: "Home" },
    { listname: "About Us " },
    { listname: "Gallery" },
    { listname: "Contact" },
    { listname: "Namaste Dinning" },
    { listname: "Namaste Kitchen" },
  ];
  return (
    <>
      <section className="py-6 bg-[#fbdd47]">
        <div className="container  mx-auto gap-10">
          <div className=" grid  grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className=" ">
              <img src={Logo} alt="Logo" className="max-w-[200px]" />
              <p className="text-justify text-sm text-black ">
                Experience the perfect blend of sweetness and spiciness with our
                authentic Indian curry. Loved by many for its unique heat, our
                curry is crafted with a variety of spices, fresh vegetables,
                fruits, and selected meats. Visit us at Tokyo I-Town Plaza in
                Nishi-Shinjuku, Tama Center, or Hakata, Fukuoka City. Our
                dedicated staff ensures every serving is a delight. Whether
                you're a local or a traveler, we welcome you to savor the
                unforgettable taste at Namaste Kitchen.
              </p>

              <h1 className="text-[16px] font-bold mt-4">Tel: 050-3044-8247</h1>
            </div>
            <div className="pt-10">
              <p className=" text-[#c1542d] font-bold pb-5 text-xl uppercase">
                Important Link
              </p>

              <div>
                <ul className="ml-8 mt-3">
                  {listitems.map((listitem, index) => (
                    <li className="m-3">
                      <a
                        href="#home"
                        className="w-max inline-block text-black transform transition-transform duration-[600ms] ease-in-out hover:translate-x-3 hover:scale-110  hover:font-semibold"
                      >
                        -{listitem.listname}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-10 ">
              <h1 className="text-[#c1542d] font-bold pb-5 text-xl uppercase ">
                facebook
              </h1>
              <div className=" mt-3">
                <div className=" size-48 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#c1542d]">
        <div className="container mx-auto py-4">
          <div className="flex justify-between ">
            <div>
              <p className="text-white">Copyright | Abhaya Shilpakar</p>
            </div>
            <div className="flex gap-1 ">
              <FaFacebookF className="bg-[#3939e0] text-white size-6  rounded-md p-1" />
              <FaInstagram className="bg-[#e9506a] text-white size-6 rounded-md p-1" />
              <FaLinkedinIn className="bg-[#2673b1] text-white size-6 rounded-md p-1" />
              <FaYoutube className="bg-[#ff0000] text-white size-6 rounded-md p-1" />
              <FaTwitter className="bg-[#5eb3eb] text-white size-6 rounded-md p-1" />
              <FaPinterest className="bg-[#c01e1e] text-white size-6 rounded-md p-1" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
