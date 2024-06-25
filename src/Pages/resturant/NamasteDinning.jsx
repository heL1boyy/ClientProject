import React from "react";
import { Link } from "react-router-dom";

const NamasteDinning = () => {
  const data = [
    { name1: "branch name", name2: "Namaste Kitchen Miwee Hashimoto Branch" },
    { name1: "genre", name2: "Indian, Nepalese, Thai" },
    { name1: "reservations and inquiries ", name2: "042-703-8338 " },
    { name1: "reservation possible", name2: "Reservations accepted" },
    {
      name1: "address",
      name2: "JR Yokohama Line Hashimoto Station",
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
      name2: "44  seats",
      name3: "(Private reservation possible for 30 to 50 people)",
    },
    {
      name1: "PRIVATE ROOM",
      name2: "Nothing",
    },
    {
      name1: "RESERVED",
      name2: "Yes",
      name3: "(20 to 50 people possible)",
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
      name2: "Yes, Available",
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

        <div className="mt-10 self-center font-bold">
          <h1 className="text-3xl text-center">
            Namaste Kitchen Miwi Hashimoto
          </h1>
          <p className="text-center">
            5F Miwe Hashimoto, 3-28-1, Hashimoto, Midori-ku, Sagamihara-shi,
            Kanagawa-ken, 252-0143
          </p>
        </div>

        {/* buttons  */}
        <div className="mt-5 self-center flex flex-col sm:flex-row gap-2">
          <button className=" bg-[#f9795f] text-white  uppercase px-3 py-2.5 rounded-[4px] hover:bg-[#fbdd47]  outline hover:outline-[#f9795f] hover:outline-4">
            <Link>ONLINE RESERVATION(TABLELOG)</Link>
          </button>
          <button className=" bg-[#f9795f] text-white  uppercase px-3 py-2.5 rounded-[4px] hover:bg-[#fbdd47]  outline hover:outline-[#f9795f] hover:outline-4">
            <Link>ONLINE RESERVATION(TABLELOG)</Link>
          </button>
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
        <main className="flex mt-5 mb-10 flex-col w-full border-2 border-black ">
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
              205 Ochiai Hilltop Patio, Tama City
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
              July 25, 2022
            </p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default NamasteDinning;
