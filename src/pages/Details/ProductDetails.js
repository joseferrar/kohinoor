import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router";
import Breadcrumb from "../../components/Breadcrumb";

function ProductDetails() {
  const location = useLocation();
  console.log(location.pathname.replaceAll("%20", " "));
  return (
    <Container>
      <Breadcrumb />
      <h1>Product Details</h1>
    </Container>
  );
}

export default ProductDetails;
