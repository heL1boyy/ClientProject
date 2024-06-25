import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu1 from "../../assets/kitchen/menu1.webp";
import menu2 from "../../assets/kitchen/menu2.webp";
import menu3 from "../../assets/kitchen/menu3.webp";
import menu4 from "../../assets/kitchen/menu4.webp";
import menu5 from "../../assets/kitchen/menu5.webp";
import menu6 from "../../assets/kitchen/menu6.webp";
import menu7 from "../../assets/kitchen/menu7.webp";
import menu8 from "../../assets/kitchen/menu8.webp";
import menu9 from "../../assets/kitchen/menu9.webp";
import menu10 from "../../assets/kitchen/menu10.webp";
import menu11 from "../../assets/kitchen/menu11.webp";
import menu12 from "../../assets/kitchen/menu12.webp";
import menu13 from "../../assets/kitchen/menu13.webp";
import menu14 from "../../assets/kitchen/menu14.webp";

const NamasteKitchen = () => {
  // State to manage visibility of lunch menu
  const [isLunchVisible, setIsLunchVisible] = useState(false);

  // State to manage visibility of dinner menu
  const [isDinnerVisible, setIsDinnerVisible] = useState(false);

  // Toggle visibility state for lunch menu
  const toggleLunchVisibility = () => {
    setIsLunchVisible(!isLunchVisible);
  };

  // Toggle visibility state for dinner menu
  const toggleDinnerVisibility = () => {
    setIsDinnerVisible(!isDinnerVisible);
  };

  const data = [
    { name1: "branch name", name2: "Namaste Kitchen Cafe & Bar" },
    { name1: "genre", name2: "Indian, Nepalese, Thai" },
    { name1: "reservations and inquiries ", name2: "042-400-1187 " },
    { name1: "reservation possible", name2: "Reservations accepted" },
    {
      name1: "address",
      name2: "1-45-1, 205 Ochiai Hilltop Patio, tama City, Tokyo 206-0033",
    },
    {
      name1: "TRANSPORTATION",
      name2: "2 minutes walk from Tama Center Station",
    },
    {
      name1: "BUSINESS HOURS",
      name2: "[Monday to Friday]",
      name3: "11:00 ~ 23:00",
      name4: "[Saturdasy, Sundays, and holidays]",
      name5: "Lunch 11:00 - 15:00, Dinner 15:00 - 22:00",
      name6: "Open on Sundays, Closed on irregular days",
    },
    {
      name1: "BUDGET",
      name2: "Lunch Time : ￥750～￥1000, Dinner Time: ￥980～",
    },
    {
      name1: "METHOD OF PAYMENT",
      name2:
        "Cards accepted (VISA, Master, JCB, AMEX, Diners, Pay Pay, AU Pay, dPay, dPayment)",
    },
    {
      name1: "NUMBER OF SEATS",
      name2: "51 seats",
      name3:
        "Some seating is available outside the restaurant, so please feel free to use those seats.",
    },
    {
      name1: "PRIVATE ROOM",
      name2: "Nothing",
    },
    {
      name1: "RESERVED",
      name2: "Yes",
    },
    {
      name1: "SMOKING AND NON-SMOKING",
      name2: "Smoking permitted at all seats",
      name3: "No smoking during lunch hours from 11:00 to 15:00",
      name4:
        "The law on passive smoking prevention (revised Health Promotion Act) came into effect on April 1, 2020, so information",
      name5:
        "may differ from the latest information. Please check with the store before visiting.",
    },
    {
      name1: "PARKING",
      name2: "Not available",
    },
    {
      name1: "SPACE AND FACILITIES",
      name2: "Wide seats, sofa seats available",
    },
    {
      name1: "MOBILE PHONE",
      name2: "NTT Docomo, Au, SoftBank",
    },
  ];
  return (
    <section className="container mx-auto">
      <div className="flex flex-col">
        {/* header  */}
        <header className="text-3xl font-bold text-[#9d1f1a] mt-4">
          <h1>
            We opend our store on November 17, 2021. We look forward to seeing
            you.
          </h1>
        </header>
        <div className="mt-10 self-center font-bold">
          <h1 className="text-3xl text-center">Namaste Kitchen Cafe & Bar</h1>
          <p className="text-center">
            1-45-1, 205 Ochiai Hiltop Patio, Tama City, Tokyo 206-0033
          </p>
        </div>
        <div className="mt-5 self-center flex flex-col sm:flex-row gap-3">
          <button className=" bg-[#f9795f] text-white  uppercase px-3 py-2.5 rounded-[4px] hover:bg-[#fbdd47]  outline hover:outline-[#f9795f] hover:outline-4">
            <Link>ONLINE RESERVATION(TABLELOG)</Link>
          </button>
          <button className=" bg-[#f9795f] text-white  uppercase px-3 py-2.5 rounded-[6px] hover:bg-[#fbdd47]  outline hover:outline-[#f9795f] hover:outline -4">
            <Link>ONLINE RESERVATION(TABLELOG)</Link>
          </button>
        </div>

        {/* table list */}
        <main className="flex mt-5 flex-col w-full border-2 border-black ">
          {data.map((datalist, index) => (
            <div className="flex flex-col sm:flex-row  " key={index}>
              <p className=" bg-[#f9795f] w-full  p-2 sm:w-[30%]  md:w-1/4  lg:w-1/5 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
                {datalist.name1}
              </p>
              <p className="bg-[#ffe6da] w-full  py-2 px-5 sm:w-[70%] md:w-3/4 lg:w-4/5 text-[15px]  border-b-2 border-white">
                {datalist.name2}

                {datalist.name3 && (
                  <>
                    <br />
                    {datalist.name3}
                  </>
                )}
                {datalist.name4 && (
                  <>
                    <br />
                    {datalist.name4}
                  </>
                )}
                {datalist.name5 && (
                  <>
                    <br />
                    {datalist.name5}
                  </>
                )}
                {datalist.name6 && (
                  <>
                    <br />
                    {datalist.name6}
                  </>
                )}
              </p>
            </div>
          ))}
        </main>

        {/* second table */}
        <main className="flex mt-5 flex-col w-full border-2 border-black ">
          <header className="text-2xl font-bold text-[#c1542d] px-3 py-3">
            <h1>Menu</h1>
          </header>
          <div className="flex flex-col sm:flex-row  ">
            <p className=" bg-[#f9795f] w-full  p-2 sm:w-[30%]  md:w-1/4  lg:w-1/5 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              COURSE
            </p>
            <p className="bg-[#ffe6da] w-full  py-2 px-5 sm:w-[70%] md:w-3/4 lg:w-4/5 text-[15px]  border-b-2 border-white">
              All-you-can-drink, all-you-can-eat
            </p>
          </div>
          <header className="text-2xl font-bold text-[#c1542d] px-3 py-3">
            <h1>Features and related Information</h1>
          </header>
          <div className="flex flex-col sm:flex-row  ">
            <p className=" bg-[#f9795f] w-full  p-2 sm:w-[30%]  md:w-1/4  lg:w-1/5 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              LOCATION
            </p>
            <p className="bg-[#ffe6da] w-full  py-2 px-5 sm:w-[70%] md:w-3/4 lg:w-4/5 text-[15px]  border-b-2 border-white">
              All-you-can-drink, all-you-can-eat
            </p>
          </div>
          <div className="flex flex-col sm:flex-row  ">
            <p className=" bg-[#f9795f] w-full  p-2 sm:w-[30%]  md:w-1/4  lg:w-1/5 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              SERVICE
            </p>
            <p className="bg-[#ffe6da] w-full  py-2 px-5 sm:w-[70%] md:w-3/4 lg:w-4/5 text-[15px]  border-b-2 border-white">
              Banquets of 2.5 hours or more are allowed
            </p>
          </div>
          <div className="flex flex-col sm:flex-row  ">
            <p className=" bg-[#f9795f] w-full  p-2 sm:w-[30%]  md:w-1/4  lg:w-1/5 font-semibold uppercase text-white text-[15px] ">
              OPENING DAY
            </p>
            <p className="bg-[#ffe6da] w-full  py-2 px-5 sm:w-[70%] md:w-3/4 lg:w-4/5 text-[15px]  ">
              November 17, 2021
            </p>
          </div>
        </main>

        {/* dropdown button link  */}
        <div className="flex flex-col  items-center">
          <button
            className="w-full border-2  border-black mt-5 px-3 py-2 uppercase text-left font-semibold text-[16px] text-[#f9795f]"
            onClick={toggleLunchVisibility}
          >
            <h1>+ Lunch menu (11:00 - 15:00)</h1>
          </button>

          {isLunchVisible && (
            <div className="w-full duration-500 ease">
              <div className="grid grid-cols-resturant-auto-fit gap-5 p-5">
                <img src={menu1} alt="menu" className="w-full h-full" />
                <img src={menu2} alt="menu" className="w-full h-full" />
                <img src={menu3} alt="menu" className="w-full h-full" />
                <img src={menu4} alt="menu" className="w-full h-full" />
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            className="w-full border-2 border-black mt-5 px-3 py-2 uppercase text-left font-semibold text-[16px] mb-12 text-[#f9795f]"
            onClick={toggleDinnerVisibility}
          >
            <h1>+ Dinner menu (11:00 - 15:00 )</h1>
          </button>
          {isDinnerVisible && (
            <div className="w-full duration-500 ease">
              <div className="grid grid-cols-resturant-auto-fit gap-5 p-5">
                <img src={menu5} alt="menu" className="w-full h-full" />
                <img src={menu6} alt="menu" className="w-full h-full" />
                <img src={menu7} alt="menu" className="w-full h-full" />
                <img src={menu8} alt="menu" className="w-full h-full" />
                <img src={menu9} alt="menu" className="w-full h-full" />
                <img src={menu10} alt="menu" className="w-full h-full" />
                <img src={menu11} alt="menu" className="w-full h-full" />
                <img src={menu12} alt="menu" className="w-full h-full" />
                <img src={menu13} alt="menu" className="w-full h-full" />
                <img src={menu14} alt="menu" className="w-full h-full" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NamasteKitchen;
