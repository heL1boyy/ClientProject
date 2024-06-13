import React from "react";
import TopNavigation from "../Component/TopNavigation";
import Bg from "../assetes/bg92.png";
import TO from "../assetes/to1.png";
import TOs from "../assetes/to1_copy.png";
import bg from "../assetes/01.png";
import WhiteShape from "../assetes/white_shape_4.png";
import WhiteShape1 from "../assetes/white_shape_3.png";
import WhiteShape2 from "../assetes/white_shape_2.png";
import Yout from "../assetes/capture_2.png";
import Map from "../assetes/capture.png";
import Logo from "../assetes/logo.png";
import SocialMedia from "../assetes/free-all-social-media-ico.png";

function Home() {
  return (
    <div>
      <TopNavigation />

      <div className="">
        <img src={Bg} alt="Img 1" className=" h-full w-full object-cover" />
      </div>

      {/* main body starts */}
      <section className="bg-blue-500   relative ">
        <div>
          <div>
            <img src={bg} alt="" className=" h-[666px]" />
          </div>
          {/* iamge_section  */}
          <div className="flex   w-full  items-center absolute top-0 m-auto bottom-0  ">
            <div className="relative basis-1/2 bg-red-600">
              <div className="mx-10">
                <img src={TO} alt="foodimage" className="w-1/2" />
                <img
                  src={TOs}
                  alt="foodimage"
                  className=" w-[266px]  absolute left-[120px] bottom-[-140px]"
                />
              </div>
            </div>

            {/* details part */}
            <div className=" flex basis-1/2 bg-orange-500">
              <div className="mx-10">
                <div className="basis-1/2 m-10 text-center">
                  <h1 className="   text-5xl italic font-extrabold">
                    Welcome to
                  </h1>
                  <span className=" text-orange-600 text-5xl italic font-semibold">
                    Nyaupaune
                  </span>
                </div>
                <div className="basis-1/2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia cumque tenetur architecto consequatur aut atque
                    omnis reiciendis fugiat iste voluptatem! Doloribus
                    asperiores adipisci incidunt vitae aperiam consequatur, sunt
                    dolorem voluptates! Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Molestiae repellendus dignissimos vel
                    voluptas. Quos, perferendis minus dolor magnam, repellat
                    pariatur quod rem illo voluptate, assumenda consectetur
                    tenetur tempore provident dolorum? Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Voluptas id quibusdam
                    totam atque maiores, ratione cum ullam repellat debitis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* resturant part  */}
      <section className="my-12">
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
      </section>

      {/* menus part  */}
      <section className=" bg-orange-100 pt-24 ">
        <div>
          <div className=" bg-red-400 ">
            <h1 className="text-center text-3xl">MENU</h1>
          </div>

          <nav className="mx-24">
            <div className="   my-10 px-10">
              <ul className="flex  text-2xl  justify-evenly py-4 text-white bg-orange-400 rounded">
                <li className="">All Menu </li>
                <li>Lunch Menu </li>
                <li>Dinner Menu </li>
                <li>Party Menu</li>
                <li>Drinks Menu</li>
                <li>Snacks Menu</li>
              </ul>
            </div>
          </nav>
        </div>
        {/* blog section  */}
        <div className="max-w-[1200px] mx-auto grid  grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
          <div className="w-full h-full ">
            <div>
              <img
                src={WhiteShape}
                alt=""
                className="w-full h-full object-cover "
              />

              <h1 className="font-bold text-2xl text-center my-5">
                Blog Post One
              </h1>

              <p className="text-center">
                <a href=" " className=" underline">
                  Read More
                </a>
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src={WhiteShape2}
                alt=""
                className="w-full h-full object-cover "
              />
              <h1 className="font-bold text-2xl text-center my-5">
                Blog Post One
              </h1>

              <p className="text-center">
                <a href=" " className=" underline">
                  Read More
                </a>
              </p>
            </div>
          </div>
          <div className=" ">
            <div>
              <img
                src={WhiteShape1}
                alt=""
                className="w-full h-full object-cover "
              />
              <h1 className="font-bold text-2xl text-center my-5">
                Blog Post One
              </h1>

              <p className="text-center">
                <a href=" " className=" underline">
                  Read More
                </a>
              </p>
            </div>
          </div>
          <div className=" ">
            <div className="">
              <img
                src={WhiteShape}
                alt=""
                className="w-full h-full object-cover "
              />
              <h1 className="font-bold text-2xl text-center my-5">
                Blog Post One
              </h1>

              <p className="text-center">
                <a href=" " className=" underline">
                  Read More
                </a>
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src={WhiteShape2}
                alt=""
                className="w-full h-full object-cover "
              />
              <h1 className="font-bold text-2xl text-center my-5">
                Blog Post One
              </h1>

              <p className="text-center">
                <a href=" " className=" underline">
                  Read More
                </a>
              </p>
            </div>
          </div>
          <div className=" ">
            <div>
              <img
                src={WhiteShape1}
                alt=""
                className="w-full h-full object-cover "
              />
              <h1 className="font-bold text-2xl text-center my-5">
                Blog Post One
              </h1>

              <p className="text-center">
                <a href=" " className=" underline">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="py-10 text-center">
          <button className=" rounded-full px-[100px] py-3 border-4 border-orange-600 ">
            View More{" "}
          </button>
        </div>
      </section>

      {/* gallary part */}

      <section className=" bg-orange-600 pb-12 ">
        <h1 className="font-bold text-4xl uppercase text-center py-[75px] text-white">
          today's speical
        </h1>
        <div className="max-w-[1200px] mx-auto grid  grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 ">
          <div className="w-full h-64 bg-slate-700">box1</div>
          <div className="w-full h-64 bg-slate-700">box1</div>
        </div>
      </section>

      {/* youtube part */}
      <section className="py-12">
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
      </section>

      {/* map */}

      <section>
        <div>
          <img src={Map} alt="" className="w-full h-[500px] object-cover" />
        </div>
      </section>

      {/* Footer */}
      <section className="py-10 bg-yellow-300">
        <div className="max-w-7xl mx-auto grid  grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="justify-self-center">
            <img src={Logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              saepe voluptatum mollitia tenetur minima nesciunt sequi quasi
              illum soluta consequuntur, provident iure incidunt rerum quis
              velit officia ipsam sint? Eos!
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
