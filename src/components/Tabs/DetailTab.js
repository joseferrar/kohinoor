import React, { useState } from "react";
import "../../App.css";
import DescriptionCard from "../Cards/DescriptionCard";
import ReviewCard from "../Cards/ReviewCard";
import SpecificationCard from "../Cards/SpecificationCard";
import ProductCarousel from "../Carousels/ProductCarousel";

const tab0 = {
  color: "#000",
  textAlign: "center",
  borderBottomStyle: "solid",
  borderColor: "#fed700",
  marginLeft: 28,
  cursor: "pointer",
  fontSize: "1.125rem",
  fontWeight: "500",
  borderWidth: 2,
};

const tab1 = {
  color: "#000",
  textAlign: "center",
  borderBottomStyle: "solid",
  borderColor: "#0000",
  marginLeft: 28,
  cursor: "pointer",
  fontSize: "1.125rem",
  fontWeight: "500",
  borderWidth: 2,
};

function DetailTab() {
  const [index, setIndex] = useState(0);

  const tabClick0 = () => {
    setIndex(0);
  };

  const tabClick1 = () => {
    setIndex(1);
  };

  const tabClick2 = () => {
    setIndex(2);
  };

  console.log("index..", index);
  return (
    <div>
      <div style={{ width: "100%", height: "50px", backgroundColor: "#0000" }}>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "12px" }}
        >
          <p style={index === 0 ? tab0 : tab1} onClick={tabClick0}>
            Description
          </p>
          <p style={index === 1 ? tab0 : tab1} onClick={tabClick1}>
            Specification
          </p>
          <p style={index === 2 ? tab0 : tab1} onClick={tabClick2}>
            Reviews
          </p>
        </div>
      </div>
      {index === 0 && <DescriptionCard />}
      {index === 1 && <SpecificationCard />}
      {index === 2 && <ReviewCard />}
    </div>
  );
}

export default DetailTab;
