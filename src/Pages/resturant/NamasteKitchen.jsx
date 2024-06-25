import React from "react";
import { Link } from "react-router-dom";

const NamasteKitchen = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col">
        <header className="text-3xl font-bold text-[#9d1f1a] mt-4">
          <h1>
            We opend our store on November 17, 2021. We look forward to seeing
            you.
          </h1>
        </header>
        <div className="mt-10 self-center font-bold">
          <h1 className="text-3xl text-center">Namaste Kitchen Cafe & Bar</h1>
          <p>1-45-1, 205 Ochiai Hiltop Patio, Tama City, Tokyo 206-0033</p>
        </div>
        <div className="mt-5 self-center flex gap-3">
          <button className=" bg-[#f9795f] text-white  uppercase px-3 py-2.5 rounded-[4px] hover:bg-[#fbdd47]  outline hover:outline-[#f9795f] hover:outline-4">
            <Link>ONLINE RESERVATION(TABLELOG)</Link>
          </button>
          <button className=" bg-[#f9795f] text-white  uppercase px-3 py-2.5 rounded-[6px] hover:bg-[#fbdd47]  outline hover:outline-[#f9795f] hover:outline -4">
            <Link>ONLINE RESERVATION(TABLELOG)</Link>
          </button>
        </div>
        <main className="flex mt-10 flex-col w-full border-2 border-black ">
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              branch name
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              Namaste Kitchen Cafe & Bar
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              GENRE
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              Indian, Nepalese, Thai
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              RESERVATIONS AND INQUIRIES
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              042-400-1187
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              RESERVATION POSSIBLE
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              Reservations accepted
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              ADDRESS
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              1-45-1, 205 Ochiai Hilltop Patio, tama City, Tokyo 206-0033
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              TRANSPORTATION
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              2 minutes walk from Tama Center Station
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              BUSINESS HOURS
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              [Monday to Friday]
              <br />
              [Monday to Friday]
              <br />
              [Monday to Friday]
              <br />
              [Monday to Friday]
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              BUDGET
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              Lunch Time : ￥750～￥1000, Dinner Time: ￥980～
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              METHOD OF PAYMENT
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              Cards accepted (VISA, Master, JCB, AMEX, Diners, Pay Pay, AU Pay,
              dPay, dPayment)
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              NUMBER OF SEATS
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              51 seats
              <br />
              Some seating is available outside the restaurant, so please feel
              free to use those seats.
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              PRIVATE ROOM
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              Nothing
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              RESERVED
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              Yes
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              SMOKING AND NON-SMOKING
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              Smoking permitted at all seats
              <br />
              No smoking during lunch hours from 11:00 to 15:00
              <br />
              The law on passive smoking prevention (revised Health Promotion
              Act) came into effect on April 1, 2020, so information
              <br />
              may differ from the latest information. Please check with the
              store before visiting.
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              branch name
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              Namaste Kitchen Cafe & Bar
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              PARKING
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              Not available
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              SPACE AND FACILITIES
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              Wide seats, sofa seats available
            </p>
          </div>
          <div className="flex">
            <p className=" bg-[#f9795f] w-1/5 py-2 px-2 font-semibold uppercase text-white text-[15px] border-b-2 border-white ">
              MOBILE PHONE
            </p>
            <p className="bg-[#ffe6da] w-4/5 py-2  px-5 text-[15px]  border-b-2 border-white">
              NTT Docomo, Au, SoftBank
            </p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default NamasteKitchen;
