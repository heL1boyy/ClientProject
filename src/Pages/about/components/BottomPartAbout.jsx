import React from "react";

import Ceo from "../../../assets/images/ceo.png";

const BottomPartAbout = () => {
  return (
    <section className=" container mx-auto my-10">
      <div className="flex flex-col md:flex-row w-full gap-10 items-center">
        <div className=" w-full md:w-1/2 h-full">
          <img src={Ceo} alt="ceophoto" className=" w-full h-full" />
        </div>
        <div className="w-full md:w-1/2 h-full">
          <div>
            <h1 className="text-[2rem] font-semibold">
              Message from the President
            </h1>
          </div>
          <p className=" text-[15px]">
            <br />
            With just one bite, a nostalgic sweetness spreads across your
            tongue, and just as you feel the relief, a ball of spiciness bursts
            into your mouth. Our Indian curry has been loved by customers who
            have said, "My mouth is on fire!"
            <br /> <br />
            Since we served it with this unique level of spiciness from the
            beginning, customers kept saying, "It's so spicy!" Some customers
            would eat halfway through and leave, saying, "I can't take it," but
            then the next day they would come back saying, "What? It's a strange
            taste that makes me want to eat it again," and so we gradually
            gained support. I remember that by the time I started helping out at
            the restaurant a few years after it opened, there were long queues
            of people waiting to get in.
            <br /> <br />
            Our curry is made using lots of spices, vegetables, fruits and
            selected meat.
            <br /> <br />
            Currently, Namaste Kitchen has two stores in Tokyo, one at Tokyo
            I-Town Plaza in Nishi-Shinjuku, one in Tama Center in Tokyo, and one
            in Hakata, Fukuoka City. The staff who serve curry at each store
            have undergone a long period of training before they can serve rice
            and pour curry on it. It is said that without exception, staff who
            serve curry to customers for the first time get so nervous that
            their hands shake. We would like you to try our curry, which we have
            taken so seriously. We welcome travel agencies and group customers
            to our stores.
            <br /> <br />
            Please take your time and enjoy it!!
            <br /> <br />
            Neupane Co., Ltd. Officers: President and CEO KASHIRAM NYAUPANE
            <br /> <br />
            <span className="text-[#c1542d]">090-9429-5963</span>
            <br /> <br />
            <span className="text-[#c1542d]">
              kashiram@nyaupane-kitchen.com
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BottomPartAbout;
