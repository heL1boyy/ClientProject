import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import AboutUs from "./Pages/about/AboutUs";
import Gallery from "./Pages/gallery/Gallery";

import Contact from "./Pages/contact/Contact";

import Footer from "./Component/footer/Footer";
import "./index.css";
import Navbar from "./Component/navbar/Navbar";
import Snacks from "./Pages/home/components/menu/component/Snacks";
import NamasteKitchen from "./Pages/resturant/NamasteKitchen";
import NamasteDinning from "./Pages/resturant/NamasteDinning";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/namastekitchencafe&bar" element={<NamasteKitchen />} />
        <Route
          path="/namastekitchenmiwihashimoto"
          element={<NamasteDinning />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/snacks" element={<Snacks />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
