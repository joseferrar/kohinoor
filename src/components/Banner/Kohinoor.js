/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container } from "react-bootstrap";
import facebook from "../../images/Facebook_Messenger-Logo.wine.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Kohinoor() {
  return (
    <div>
      <div
        style={{ width: "100%", height: "400px", backgroundColor: "#181818" }}
      >
        <Container>
          <h1
            className="text-center"
            style={{ top: 50, color: "#fff", position: "relative" }}
          >
            Why choose Kohinoor
          </h1>
          <p
            className="text-center"
            style={{
              top: 50,
              color: "#fff",
              position: "relative",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Kohinoor's Promise of Joyful Experience & Assured Quality, Creating
            Milestones Since 1967 <br />
            Your trusted destination for Consumer Electronics
          </p>

          {/* <Row md={5}>
            <Col>
              <p className="mt-5" style={{ color: "#fed700", fontWeight: 600 }}>
                Find it Fast
              </p>
              <ul
                style={{ listStyle: "none", color: "#fed700", marginLeft: -30 }}
              >
                <li>Accessories</li>
                <li className="mt-2">Air Conditioner</li>
                <li className="mt-2">Computers</li>
                <li className="mt-2">Game Zone</li>
                <li className="mt-2">Home Appliances</li>
              </ul>
            </Col>
            <Col>
              <p
                className="mt-4"
                style={{ color: "#fed700", fontWeight: 600 }}
              ></p>
              <ul
                style={{ listStyle: "none", color: "#fed700", marginLeft: -30 }}
              >
                <br />
                <li className="mt-5">Home Entertainment</li>
                <li className="mt-2">Smart Phone</li>
                <li className="mt-2">Tablets</li>
              </ul>
            </Col>
            <Col>
              <p className="mt-5" style={{ color: "#fed700", fontWeight: 600 }}>
                My Account
              </p>
              <ul
                style={{ listStyle: "none", color: "#fed700", marginLeft: -30 }}
              >
                <li className="mt-3">My Account</li>
                <li className="mt-2"> Track Your Order</li>
                <li className="mt-2"> Wish List</li>
              </ul>
            </Col>
            <Col>
              <p className="mt-5" style={{ color: "#fed700", fontWeight: 600 }}>
                About
              </p>
              <ul
                style={{ listStyle: "none", color: "#fed700", marginLeft: -30 }}
              >
                <li className="mt-3">About Us</li>
                <li className="mt-3">Media/Press</li>
                <li className="mt-2">Our Promise</li>
                <li className="mt-2">FAQ</li>
                <li className="mt-2">Testimonials</li>
                <li className="mt-2">Careers</li>
              </ul>
            </Col>
            <Col>
              <p className="mt-5" style={{ color: "#fed700", fontWeight: 600 }}>
                Policies
              </p>
              <ul
                style={{ listStyle: "none", color: "#fed700", marginLeft: -30 }}
              >
                <li>Privacy Policy</li>
                <li className="mt-2">Terms & Conditions</li>
                <li className="mt-2">Disclaimer</li>
                <li className="mt-2">Cancellation, Returns & Refunds</li>
              </ul>
            </Col>
          </Row> */}
        </Container>
      </div>
    </div>
  );
}

export default Kohinoor;
