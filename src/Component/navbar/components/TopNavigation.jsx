import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import CenterNavigation from "./CenterNavigation";
import { FaPinterest } from "react-icons/fa";

function TopNavigation() {
  return (
    <>
      <div className="  bg-[#fbd597] ">
        <section className=" container mx-auto  py-4 ">
          <nav className="flex flex-col sm:flex-row  items-center  justify-between gap-3">
            <div>
              <p>Welcome to Neupone Reasturant </p>
            </div>

            <div className="flex gap-1 ">
              <FaFacebookF className="bg-[#3939e0] text-white size-6  rounded-md p-1" />
              <FaInstagram className="bg-[#e9506a] text-white size-6 rounded-md p-1" />
              <FaLinkedinIn className="bg-[#2673b1] text-white size-6 rounded-md p-1" />
              <FaYoutube className="bg-[#ff0000] text-white size-6 rounded-md p-1" />
              <FaTwitter className="bg-[#5eb3eb] text-white size-6 rounded-md p-1" />
              <FaPinterest className="bg-[#c01e1e] text-white size-6 rounded-md p-1" />
            </div>
          </nav>
        </section>
      </div>
      <CenterNavigation />
    </>
  );
}

export default TopNavigation;
