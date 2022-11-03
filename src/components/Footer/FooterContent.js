/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import facebook from "../../images/Facebook_Messenger-Logo.wine.svg";
import twitter from "../../images/Twitter-Logo.wine.svg";
import instagram from "../../images/Instagram-Logo.wine.svg";
import gmail from "../../images/Gmail-Logo.wine.svg";
import whatsapp from "../../images/WhatsApp-Logo.wine.svg";
import visa from "../../images/Visa_Inc.-Logo.wine.svg";
import Mastercard from "../../images/Mastercard-Logo.wine.svg";
import American_Express from "../../images/American_Express-Logo.wine.svg";

function FooterContent() {
  return (
    <div>
      <div
        style={{ width: "100%", height: "300px", backgroundColor: "#181818" }}
      >
        <Container>
          <Row md={7}>
            <Col>
              {" "}
              <img
                alt=""
                src={
                  "https://www.kohinoorelectronics.com/static/assets/img/logo/kohinoor-logo.png"
                }
                width="200"
                height="50"
                className="mt-5"
              />
              <div className="d-flex">
                <i
                  className="fas fa-headset"
                  style={{
                    color: "#fed700",
                    marginTop: 6,
                    marginLeft: 2,
                    fontSize: 40,
                  }}
                ></i>
                <p
                  className="mt-2 mx-3"
                  style={{ color: "#fed700", fontSize: 12 }}
                >
                  Got questions? Call us!{" "}
                  <p style={{ fontSize: 18 }}>022 6163 6464</p>
                </p>
              </div>
              <div className="d-flex">
                <img src={facebook} width="50" height="50" />
                <img src={twitter} width="50" height="50" />
                <img src={instagram} width="50" height="50" />
                <img src={gmail} width="50" height="50" />
                <img src={whatsapp} width="50" height="50" />
              </div>
            </Col>
            <Col></Col>
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
          </Row>
        </Container>
      </div>
      <div
        style={{ width: "100%", height: "55px", backgroundColor: "#0061e0" }}
      >
        <Container className="d-flex">
          <p className="mt-3" style={{ color: "#fff", fontWeight: 500 }}>
            @ Kohinoor Televideo Pvt.
          </p>
          <p className="mt-3" style={{ color: "#fff" }}>
            {" "}
            - All rights Reserved
          </p>

          <div className="d-flex" style={{ marginLeft: "auto"}}>
            <img src={visa} width="50" height="50" />
            <img src={Mastercard} width="50" height="50" />
            <img src={American_Express} width="50" height="50" />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default FooterContent;
