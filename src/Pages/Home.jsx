import React from "react";
import TopNavigation from "../Component/TopNavigation";

import SocialMedia from "../assetes/free-all-social-media-ico.png";
import MenuSection from "../Component/MenuSection";
import Hero from "../Component/Hero";
import Restruant from "../Component/Restruant";
import TodaysSpeical from "../Component/TodaysSpeical";
import Footer from "../Component/Footer";
import Welcome from "../Component/Welcome";

function Home() {
  return (
    <div>
      <TopNavigation />

      {/* <div className="">
        <img src={Bg} alt="Img 1" className=" h-full w-full object-cover" />
      </div> */}

      <Hero />

      {/* welcome starts */}

      <Welcome />

      {/* resturant part  */}
      {/* <section className="my-12">
        <h3 className="text-center  mb-12 text-2xl">Our Resturant </h3>
        <div className="flex mx-10 gap-5">
          <div className=" basis-1/2 bg-slate-900 h-60 text-white flex items-end">
            <div className="w-full h-8 bg-purple-500 ">
              <h1 className="text-center"> Namaste kitchen Cafe & bar</h1>
            </div>
          </div>
          <div className=" basis-1/2 bg-black h-60 text-white flex items-end">
            <div className="w-full h-8 bg-purple-500 ">
              <h1 className="text-center"> Namaste kitchen Miwi Hashimoto</h1>
            </div>
          </div>
        </div>
      </section> */}

      <Restruant />

      {/* menus part  */}

      <MenuSection />

      {/* todays  speical*/}

      <TodaysSpeical />

      {/* youtube part */}
      {/* <section className="py-12">
        <h1 className="pb-10 max-w-5xl mx-auto text-[30px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          cupiditate maiores animi architecto eligendi.
        </h1>
        <div className="max-w-[1200px] mx-auto grid  grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 pb-10">
          <div>
            <img src={Yout} alt="" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              facilis asperiores, soluta cum natus blanditiis. Libero, modi
              obcaecati! Voluptas blanditiis mollitia excepturi suscipit totam
              eius, odio minima reprehenderit? Itaque, porro. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Officia quaerat non optio
              modi esse aut assumenda. Autem inventore ipsam deserunt, corporis,
              obcaecati accusamus vero natus quos quia, eveniet quibusdam
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Pariatur ex veniam soluta molestiae, doloribus eos dicta
              aliquam repellendus. Ea illum molestiae perspiciatis tempora
              aspernatur dicta molestias fuga amet sint repellat?Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Totam illum aut
              aliquam modi? Cumque, eveniet doloremque ducimus sunt consectetur
              enim aliquam. Nemo deleniti natus
            </p>
            <button className="px-6 py-2 mt-3 bg-orange-600 text-white text-2xl">
              Call Us
            </button>
          </div>
        </div>
      </section> */}

      {/* map */}

      {/* <section>
        <div>
          <img src={Map} alt="" className="w-full h-[500px] object-cover" />
        </div>
      </section> */}

      {/* Footer */}

      <Footer />

      {/* copyright  */}

      <section className="bg-orange-600">
        <div className="flex justify-between max-w-7xl mx-auto ">
          <div>
            <p>Copyright | Abhaya Shilpakar</p>
          </div>
          <div>
            <img src={SocialMedia} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
