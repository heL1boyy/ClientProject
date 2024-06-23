import React from "react";

const UpperContact = () => {
  return (
    <section className=" container  mx-auto  my-16">
      <div className="grid grid-cols-contact-auto-fit w-full gap-5 items-center ">
        <div className="   text-[18px] text-gray-500">
          <h1 className="font-bold uppercase text-2xl text-black">
            Namaste Kitchen Miwi Hashimoto
          </h1>
          <br />
          <p>
            Location: 5F Miwe Hashimoto, 3-28-1 Hashimoto, Midori-ku,
            Sagamihara-shi, Kanagawa-ken, 252-0143
          </p>
          <br />
          <p className="font-semibold">
            Email:
            <span className="text-[#c1542d]">namaste@nyaupane-kitchen.com</span>
          </p>
          <br />
          <p className="font-semibold">
            Phone Number: <span className="text-[#c1542d]">03-5989-0405</span>
          </p>
        </div>
        <div className="  text-[18px] text-gray-500">
          <h1 className="font-bold uppercase text-2xl text-black">
            Namaste Kitchen Cafe & Bar
          </h1>
          <br />
          <p>
            Location: 1-45-1 Ochiai, Tama-Shi, Okanoue Patio Main Building 2F,
            Tama Center, Tokyo
          </p>
          <br />
          <p className="font-semibold">
            Email:
            <span className="text-[#c1542d]">
              tama.namaste@nyaupane-kitchen.com
            </span>
          </p>
          <br />
          <p className="font-semibold">
            Phone Number: <span className="text-[#c1542d]"> 042-400-1187</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpperContact;
