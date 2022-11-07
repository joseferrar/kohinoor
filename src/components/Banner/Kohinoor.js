/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container } from "react-bootstrap";
import facebook from "../../images/Facebook_Messenger-Logo.wine.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ServiceData } from "../../data/ServiceData";

function Kohinoor() {
  return (
    <div>
      <div
      onMouseMove={()=> console.log("mousemove")}
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

          <Row>
            {ServiceData.map((item, i) => (
              <Col className="mt-5" xs lg="2" style={{ borderRight: "1px solid rgba(255,255,255,.5)"}}>
                <img
                  key={i}
                  src={item.img}
                  alt={item.img}
                  className="service-img"
                />
               <p className="mt-2" style={{ color: "#fed700", fontWeight: 600, textAlign: "center" }}>
                {item.title}
              </p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Kohinoor;
