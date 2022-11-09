/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import "../../App.css";
import { VideoData } from "../../data/VideoData";
import Carousel from 'react-grid-carousel'

function VideoCarousel() {
  const [ktv, setKtv] = useState("KTV");

  const handleKtv = (value) => {
    setKtv(value);
  };
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col xs={8}>
            <div className="embed-responsive embed-responsive-16by9">
              {VideoData.map(
                (item, index) =>
                  item.name === ktv && (
                    <img
                      key={index}
                      className="embed-responsive-item"
                      src={item.url}
                      width="1000"
                      height="600"
                      style={{ backgroundColor: "#000" }}
                    />
                  )
              )}
            </div>
          </Col>
          <Col xs={1}></Col>
          <Col xs={2} className="ml-6">
            <Stack style={{ height: 600, backgroundColor: "#151515" }}>
              {VideoData.map((item, index) => (
                <>
                  <div
                    key={index}
                    style={{
                      height: 100,
                      backgroundColor: ktv === item.name && "#0061e0",
                      cursor: "pointer",
                    }}
                    onClick={() => handleKtv(item.name)}
                  >
                    <p
                      className="m-2 text-center"
                      style={{
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </p>
                  </div>
                  <hr style={{ color: "#fff" }} />
                </>
              ))}
            </Stack>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default VideoCarousel;
