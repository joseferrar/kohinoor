import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./components/Headers/TopHeader";
import FixedHeader from "./components/Headers/FixedHeader";
import BannerCarousel from "./components/Carousels/BannerCarousel";
import SlideCarousel from "./components/Carousels/SlideCarousel";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <FixedHeader />
      <BannerCarousel/>
      <SlideCarousel/>
    </div>
  );
}

export default App;
