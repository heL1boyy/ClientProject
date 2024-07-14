import React from "react";

const Youtude = () => {
  return (
    <div>
      <section className="container mx-auto py-12">
        <h1 className="pb-10  text-[21px]  font-bold text-center">
          旅行会社様 / 団体のお客様へ
          インド.タイ料理料理ネウパネキチンはツアー・団体のお客様のご来店を歓迎しております。
        </h1>
        <div className=" grid  grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 pb-10">
          <div className=" h-[256px]">
            <iframe
              src="https://www.youtube.com/embed/fSM8d0Lxn-s"
              frameBorder="0"
              title="cookingvideo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div>
            <h1 className=" font-bold text-[20px]  text-[#c1542d] mb-4">
              本格インド料理、インドカレーをお楽しみください。
            </h1>
            <p className="text-lg text-justify">
              やっぱり本格カレーはイチオシ！チキンカレー、シーフードカレー、ベジタブルカレー、マトンカレー、タイカレーと種類も豊富◎ナンの種類も王道のプレーンから、ゴマ、ガーリック、チーズ、クルミやアーモンドの入ったカブリナンも♪豊富な種類から選べるので楽しい♪
              900円～
            </p>
            <button className="px-4 py-[6px] mt-3 bg-[#c1542d] text-white uppercase">
              Call Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Youtude;
