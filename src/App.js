import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Breadcrumb from "./components/Breadcrumb";
import ProductDetails from "./pages/Details/ProductDetails";
import Breadcrumb_config from "./components/Breadcrumb/config";
import About from "./pages/About";
import TopHeader from "./components/Headers/TopHeader";
import FixedHeader from "./components/Headers/FixedHeader";
import Contact from "./pages/Contact";
import Locator from "./pages/Locator";
import axios from "axios";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();

  return (
    <div>
      <TopHeader />
      <FixedHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact us" element={<Contact />} />
        <Route path="/locator" element={<Locator />} />
        {Breadcrumb_config.map((route, i) => (
          <Route key={route} {...route} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
