import React from "react";
import Logo from "../assetes/logo.png";
function Footer() {
  return (
    // <div className="bg-gray-800 text-white py-8">
    //   <div className="container mx-auto">
    //     <div className="grid grid-cols-3 gap-8">
    //       <div>
    //         <h3 className="font-bold">Nyaupane Kitchen</h3>
    //         <p>
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry.
    //         </p>
    //       </div>
    //       <div>
    //         <h3 className="font-bold">Important Links</h3>
    //         <ul>
    //           <li>Home</li>
    //           <li>About Us</li>
    //           <li>Stories</li>
    //           <li>Menu</li>
    //           <li>Today's Special</li>
    //           <li>Contact Us</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="font-bold">Find Us</h3>
    //         <p>123 Main Street, Tokyo, Japan</p>
    //         <p>Tel: 050-3044-8247</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="py-10 bg-[#fbdd47]">
      <div className="container  mx-auto grid  grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        <div className="justify-self-center ">
          <img src={Logo} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            saepe voluptatum mollitia tenetur minima nesciunt sequi quasi illum
            soluta consequuntur, provident iure incidunt rerum quis velit
            officia ipsam sint? Eos!
          </p>
        </div>
        <div className="justify-self-center">
          <p className=" text-orange-600 font-bold pb-5 text-xl">
            Important Link
          </p>

          <ul>
            <li>-home</li>
            <li>-about us</li>
            <li>-menus</li>
            <li>-servies</li>
            <li>-today's special </li>
            <li>-Lunch menu </li>
            <li>-Dinner menu </li>
            <li>-Drinks menu </li>
            <li>-part menu </li>
            <li>-Snacks menu</li>
            <li>-contact us </li>
          </ul>
        </div>

        <div className="justify-self-center">
          <h1 className="text-orange-600 font-bold pb-5 text-xl">facebook</h1>
          <div>
            <div className=" size-72 bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
