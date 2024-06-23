import React from "react";
import bg from "../../../assets/images/about.jpg";
const UpperPartAbout = () => {
  return (
    <section className="container mx-auto ">
      <div className="flex flex-col md:flex-row w-full  gap-10  items-center">
        <div className="w-4/5  h-full my-[70px]  text-center font-[600] ">
          <table className="border  border-[#c1542d] border-collapse  ">
            <tr>
              <td className="border py-[10px] border-[#c1542d]">
                Company Name
              </td>
              <td className="border py-[10px] border-[#c1542d] ">
                Neupane Co., Ltd.
              </td>
            </tr>
            <tr>
              <td className="border py-[10px] border-[#c1542d]">
                Representative
              </td>
              <td className="border py-[10px] border-[#c1542d] bg-[#c1542d] text-white font-[500] ">
                Kashiram Nyaupane
              </td>
            </tr>
            <tr>
              <td className="border py-[10px] border-[#c1542d]">
                Head Office Location
              </td>
              <td className="border py-[10px] border-[#c1542d] " colSpan="2">
                〒206-0025
                <br /> 3-3-4, 303 Nagayama, Tama City, Tokyo
              </td>
            </tr>
            <tr>
              <td className="border py-[10px] border-[#c1542d]">
                Business Contents
              </td>
              <td className="border py-[10px] border-[#c1542d]">
                Restaurants, wholesale businesses, supplier businesses,
                import/export businesses, etc.
              </td>
            </tr>
            <tr>
              <td className="border py-[10px] border-[#c1542d] ">
                Shareholders
              </td>
              <td className="border py-[10px] border-[#c1542d]">
                Neupane Co., Ltd. (100%)border-[#c1542d]
              </td>
            </tr>
            <tr>
              <td className="border py-[10px] border-[#c1542d] ">
                Established
              </td>
              <td className="border border-[#c1542d] ">September 2, 2013</td>
            </tr>
            <tr>
              <td className="border py-[10px] border-[#c1542d] ">
                Number of employees
              </td>
              <td className="border py-[10px] border-[#c1542d] ">16</td>
            </tr>
            <tr>
              <td className="border py-[10px] border-[#c1542d] ">
                Board member
              </td>
              <td className="border py-[10px] border-[#c1542d] bg-[#c1542d] text-white font-[500]">
                President and CEO
              </td>
            </tr>
          </table>
        </div>
        <div className="w-4/5  h-4/5 bg-purple-700 self-center">
          <img src={bg} alt="" className="w-full h-full " />
        </div>
      </div>
    </section>
  );
};

export default UpperPartAbout;
