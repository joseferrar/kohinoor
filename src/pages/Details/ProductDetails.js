import React, { useState } from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { useLocation } from "react-router";
import Breadcrumb from "../../components/Breadcrumb";
import ReactImageMagnify from "react-image-magnify";
import Divider from "../../components/Divider";
import RateList from "../../components/Lists/RateList";

function ProductDetails() {
  const location = useLocation();
  console.log(location.pathname.replaceAll("%20", " "));

  const data = location.state;
  console.log(data);
  const [idx, setIdx] = useState(data?.placement?.product_img);
  const eventClick = (event) => {
    setIdx(event);
  };
  console.log(idx);
  const imageProps = {
    smallImage: {
      alt: "Phasellus laoreet",
      isFluidWidth: true,
      src: idx,
    },
    largeImage: {
      src: idx,
      width: 1200,
      height: 1800,
    },
    enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
  };
  return (
    <Container className="mt-3">
      <Breadcrumb />
      <Row className="mt-3">
        <Col md={5} style={{ display: "flex" }}>
          <Stack gap={3}>
            {data?.placement?.subImg?.map((item, index) => (
              <div
                style={{ width: 85 }}
                className={item === idx ? "border border-primary" : "border  border-light"}
                onClick={() => {
                  eventClick(item);
                }}
              >
                <img src={item} width="80" height="80" />
              </div>
            ))}
          </Stack>
          {/* <img src={idx} width="500" height="500" style={{marginTop: -30}}/> */}
          <ReactImageMagnify {...imageProps} style={{ marginRight: 60 }} />
        </Col>

        <Col sm={5}>
          <h2 style={{ fontSize: 20, fontWeight: 500 }}>
            Hitachi 1 Ton 3 Star Split Inverter Air Conditioner (RAPG312HFEOZ1)
          </h2>
          <div style={{ display: "flex" }}>
            <p
              style={{
                fontWeight: "bold",
                display: "flex",
                color: "gray",
                fontSize: 14,
              }}
            >
              Product Code
            </p>
            <p style={{ color: "gray", fontSize: 14 }}>&nbsp; RAPG312HFEOZ1</p>
          </div>
          <a
            href="#"
            style={{ fontSize: 14, textDecoration: "none", color: "#0062bd" }}
          >
            Add Review
          </a>
          <br />
          <div>
            <div style={{ display: "flex" }}>
              <a
                href="#"
                style={{
                  fontSize: 16,
                  textDecoration: "none",
                  color: "#fed700",
                  fontWeight: "400",
                }}
              >
                Image Description
              </a>
              <p
                style={{
                  fontWeight: 700,
                  color: "#5cb85c",
                  marginLeft: 12,
                }}
              >
                Out Of Stock
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <input
                className="form-control"
                placeholder="Enter mobile no to get notified"
                type="number"
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  width: 250,
                  height: 35,
                }}
              />
              <Button
                variant="danger"
                style={{ borderRadius: 20, marginLeft: 16 }}
              >
                Notify me
              </Button>
            </div>
            <Divider />
          </div>

          <ul style={{ listStyle: "none" }}>
            <li>
              {" "}
              <p style={{ fontSize: 14, marginLeft: 12 }}>
                M.R.P.: ₹ {data?.placement?.price}
              </p>
            </li>
            <li>
              {" "}
              <div style={{ display: "flex", marginTop: -12 }}>
                <p style={{ fontSize: 14 }}>Joy Price: </p>
                <p
                  style={{
                    fontSize: 18,
                    color: "#0062bd",
                    fontWeight: 500,
                    marginLeft: 8,
                  }}
                >
                  {" "}
                  ₹ {data?.placement?.price}
                </p>
                <p style={{ fontSize: 16, fontWeight: 500, marginLeft: 8 }}>
                  Free Delivery
                </p>
              </div>
            </li>
            <li>
              <div style={{ display: "flex", marginTop: -12 }}>
                <p style={{ fontSize: 14 }}>You Save: </p>
                <p
                  style={{
                    fontSize: 14,
                    color: "#0062bd",
                    marginLeft: 8,
                  }}
                >
                  {" "}
                  ₹ 16700(34%)
                </p>
              </div>
            </li>
            <li>
              {" "}
              <div style={{ display: "flex", marginTop: -12 }}>
                <p style={{ fontSize: 12, marginLeft: 80 }}>
                  Inclusive of all taxes
                </p>
              </div>
            </li>
          </ul>
          <ul style={{ listStyle: "none", marginLeft: -20 }}>
            <li>
              <div style={{ display: "flex", marginTop: -12 }}>
                <p style={{ fontSize: 14 }}>Get it between</p>
                <p
                  style={{
                    fontSize: 14,
                    marginLeft: 8,
                    fontWeight: 600,
                  }}
                >
                  Nov 13
                </p>
                <p style={{ fontSize: 14 }}>&nbsp;to</p>
                <p
                  style={{
                    fontSize: 14,
                    marginLeft: 6,
                    fontWeight: "bold",
                  }}
                >
                  Nov 14
                </p>
              </div>
            </li>
          </ul>

          <Divider />

          <RateList />

          <div style={{ display: "flex" }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: 16,
                width: 200,
              }}
            >
              Notes
            </p>
            <p style={{ fontSize: 14, marginLeft: -22, color: "red" }}>
              *The standard installation fee and removal of old AC is
              chargeable, Any other accessories used will be charged extra. T&C
              applied*
            </p>
          </div>
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: 16,
                width: 200,
              }}
            >
              Key Features
            </p>
            <ul style={{ color: "gray", fontSize: 14 }}>
              <li>
                Coming with such a modern design, the Hitachi Shizen 3100S 1 Ton
                3 Star Inverter Split ACs price is fair compared to its
                features. Inverter technology is used in the air conditioner,
                which improves its efficiency. This wall mount AC has been
                designed to provide maximum comfort. It has a 1 Ton capacity,
                making it an ideal choice for a small to medium-sized room. It
                is equipped with a 3-Star rating which makes it more energy
                efficient. The copper condenser ensures enhanced performance and
                longevity. It enables better cooling and requires low
                maintenance. So, wait no more! Order the Hitachi Shizen 3100S 1
                Ton 3 Star Inverter Split AC online, right now!
              </li>
              <li>Tropical Rotary Compressor, Cooling Capacity - 3516 Watts</li>
              <li>1.0 Ton</li>
              <li>3 Star</li>
              <li>Approximate Coverage Area  130 Sq.Ft (12.08 Sq.M)</li>
            </ul>
          </div>
          <Divider />
          <img src="https://www.kohinoorelectronics.com/static/assets/svg/info/1_free_Delivery.svg" width={"35"} height={"35"}/>
          <p style={{color: "#0062bd", fontSize: 12, marginLeft: -6}}>Fast Delivery</p>
          <Divider />
        </Col>

        <Col>sm=8</Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
