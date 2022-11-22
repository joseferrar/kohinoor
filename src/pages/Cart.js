import React from "react";
import { Button, Container } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumb";

function Cart() {
  return (
    <Container>
      <Breadcrumbs />
      <div style={{ textAlign: "center" }}>
        <h3 style={{ fontWeight: 700 }}>Your Cart is empty</h3>
        <p style={{ color: "#747474", lineHeight: 1.7 }}>
          Looks like you haven’t made your choice yet
        </p>
        <img
          src="http://192.168.1.195:5000/static/assets/image/empty-cart.png"
          className="mt-4"
          alt="cart"
        />
        <br />
        <Button
          variant="warning"
          className="mt-5"
          style={{
            borderRadius: 20,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Continue Shopping
        </Button>
      </div>
    </Container>
  );
}

export default Cart;
