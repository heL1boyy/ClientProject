import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import AboutUs from "./Pages/about/AboutUs";
import Gallery from "./Pages/gallery/Gallery";
import OurResturant from "./Pages/resturant/OurResturant";
import Contact from "./Pages/contact/Contact";

import Footer from "./Component/footer/Footer";
import "./index.css";
import Navbar from "./Component/navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/resturant" element={<OurResturant />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
