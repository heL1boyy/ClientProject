import React from "react";

const BottomContact = () => {
  return (
    <section className="bg-[#f0f0f0]">
      <div className="container mx-auto py-14 ">
        <div className="flex justify-center text-2xl font-semibold text-[#c1542d] underline  underline-offset-2 mb-5">
          <h1>Write to Us </h1>
        </div>
        <div className="grid grid-cols-contact-auto-fit  w-full gap-5">
          <div className="flex justify-center w-full   ">
            <form action="" className="w-full ">
              <input
                type="text"
                name="name"
                id="1"
                placeholder="Your Name "
                className="p-2.5 border-2  outline-none mb-3 w-full bh-white text-gray-500 font-semibold"
              />
              <br />
              <input
                type="email"
                name="email"
                id="1"
                placeholder="Your Email "
                className="p-2.5 border-2 outline-none my-3 w-full font-semibold"
              />
              <br />
              <input
                type="text"
                name="subject"
                id="1"
                placeholder="Subject "
                className="p-2.5 border-2 outline-none my-3 w-full font-semibold"
              />
              <br />
              <textarea
                required
                rows="10"
                name="message"
                id="message"
                placeholder="Please leave us message "
                className=" border-2 outline-none mt-3 w-full font-semibold "
              ></textarea>
              <button
                type="submit"
                className="bg-[#c1542d] text-white py-1.5 px-7 hover:bg-white hover:text-black outline hover:outline-[#c1542d]  hover:outline-2  duration-700 ease-in-out delay-75"
              >
                Send
              </button>
            </form>
          </div>
          <div className="bg-orange-300">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51892.07327223946!2d139.447646!3d35.62145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018fb5f487d80ed%3A0x46a2b0ee5d2c0f9b!2s206-0025%2C%20Japan!5e0!3m2!1sen!2snp!4v1719241721468!5m2!1sen!2snp"
              className="w-full h-full"
              Style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomContact;
