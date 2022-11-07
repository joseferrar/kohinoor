import React, { useState } from "react";
import "../../App.css";
import ProductCarousel from "../Carousels/ProductCarousel";

const tab0 = {
  color: "white",
  textAlign: "center",
  borderBottomStyle: "solid",
  borderColor: "#fed700",
  marginLeft: 28,
  cursor: "pointer",
  fontSize: "1.4rem",
  fontWeight: "500",
};

const tab1 = {
  color: "#fed700",
  textAlign: "center",
  borderBottomStyle: "solid",
  borderColor: "#0000",
  marginLeft: 28,
  cursor: "pointer",
  fontSize: "1.4rem",
  fontWeight: "500"
};

function CategoryTab() {
  const [index, setIndex] = useState(0);

  const tabClick0 = () => {
    setIndex(0);
  };

  const tabClick1 = () => {
    setIndex(1);
  };
 console.log('index..', index);
  return (
    <div>
      <div style={{ width: "100%", height: "50px", backgroundColor: "#000" }}>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "12px" }}
        >
          <p style={index === 0 ? tab0 : tab1} onClick={tabClick0}>
            New Arrivals
          </p>
          <p style={index === 0 ? tab1 : tab0} onClick={tabClick1}>
            Trending
          </p>
        </div>
      </div>
      {index === 0 ? <ProductCarousel/> : <h1>hello</h1>}
    </div>
  );
}

export default CategoryTab;
