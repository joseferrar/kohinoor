import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productData } from "../../data/ProductData";
import ProductCard from "../Cards/ProductCard";

const ProductCarousel = () => {
  const ref = useRef(null);

  const scrollLeft = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const scrollRight = (scrollOffset) => {
    ref.current.scrollLeft -= scrollOffset;
  };
  console.log(ref);
  return (
    <>
      <div className="button-contianer">
        <i
          className="fas fa-chevron-left"
          onClick={() => {
            scrollRight(250);
            console.log("arrow left");
          }}
          style={{
            color: "#fff",
            fontSize: 20,
            marginTop: 40,
            backgroundColor: "#0061e0",
            borderRadius: 15,
            width: 30,
            height: 30,
            paddingTop: 5,
            marginLeft: 40,
            textAlign: "center",
          }}
        ></i>

        <i
          className="fas fa-chevron-right"
          onClick={() => {
            scrollLeft(250);
            console.log("arrow right");
          }}
          style={{
            color: "#fff",
            fontSize: 20,
            marginTop: 40,
            backgroundColor: "#0061e0",
            borderRadius: 15,
            width: 30,
            height: 30,
            paddingTop: 5,
            marginRight: 40,
            textAlign: "center",
          }}
        ></i>
      </div>
      <div className="product-container" ref={ref}>
        {productData.map((placement, i) => (
          <Link
            to={`/product/${placement?.type?.replace("%20", " ")}`}
            style={{ textDecoration: "none" }}
          >
            <ProductCard
              kay={i}
              name={placement.product_name}
              image={placement.product_img}
              price={placement.price}
            />
          </Link>
        ))}
      </div>
    </>
  );
};
export default ProductCarousel;
