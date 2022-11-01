import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./components/Headers/TopHeader";
import FixedHeader from "./components/Headers/FixedHeader";
import BannerCarousel from "./components/Carousels/BannerCarousel";
import SlideCarousel from "./components/Carousels/SlideCarousel";
import { Container } from "react-bootstrap";
import DiscountCard from "./components/Cards/DiscountCard";
import BrandCard from "./components/Cards/BrandCard";
import CategoryTab from "./components/Tabs/CategoryTab";

function App() {
  return (
    <div className="App">
      <TopHeader />

      <FixedHeader />
      <BannerCarousel />

      <div className="slide-container">
        <Container>
          <SlideCarousel />
          <DiscountCard />
        </Container>
      </div>
      <Container>
        <BrandCard />
      </Container>

      <CategoryTab />
    </div>
  );
}

export default App;
