import React from "react";
import Hero from "./components/hero/Hero";
import Welcome from "./components/Welcome";
import Restruant from "./components/Restruant";
import MenuSection from "./components/menu/MenuSection";
import TodaysSpeical from "./components/TodaysSpeical";
import Youtude from "./components/Youtude";

function Home() {
  return (
    <div>
      <Hero />
      <Welcome />
      <Restruant />
      {/* menus part  */}
      <MenuSection />
      {/* todays  speical*/}
      <TodaysSpeical />

      {/* youtube part */}
      <Youtude />
    </div>
  );
}

export default Home;
