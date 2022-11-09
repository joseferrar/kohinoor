import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "../components/Headers/TopHeader";
import FixedHeader from "../components/Headers/FixedHeader";
import BannerCarousel from "../components/Carousels/BannerCarousel";
import SlideCarousel from "../components/Carousels/SlideCarousel";
import { Container } from "react-bootstrap";
import DiscountCard from "../components/Cards/DiscountCard";
import BrandCard from "../components/Cards/BrandCard";
import CategoryTab from "../components/Tabs/CategoryTab";
import Footer from "../components/Footer/Footer";
import Kohinoor from "../components/Banner/Kohinoor";
import VideoCarousel from "../components/Carousels/VideoCarousel";

function Home() {
  return (
    <div className="App">
    
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
      <Kohinoor />
      <div style={{ marginLeft: 150, marginRight: 150, marginTop: 150 }}>
        <img src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/images/static_banner/101.png" />
      </div>
      <VideoCarousel/>
      <Footer />
    </div>
  );
}

export default Home;
