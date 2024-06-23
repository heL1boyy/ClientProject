import React from "react";

const BottomContact = () => {
  return (
    <section className="container mx-auto my-10">
      <div className="grid grid-cols-contact-auto-fit  w-full gap-5">
        <div className="flex  bg-slate-400">
          <form action="">
            <input type="text" name="name" id="1" placeholder="YourName " />
            <input type="email" name="email" id="1" placeholder="YourEmail " />
            <input type="text" name="subject" id="1" placeholder="Subject " />
            <textarea
              name=""
              id=""
              placeholder="please leave us message "
            ></textarea>
          </form>
        </div>
        <div className="bg-orange-300"></div>
      </div>
    </section>
  );
};

export default BottomContact;
