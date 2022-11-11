import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function RateList() {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item style={{ height: 42 }}>
          <div style={{ display: "flex" }}>
            <img
              alt="img"
              src="https://www.kohinoorelectronics.com/static/assets/img/icons/offers.png"
              width={25}
              height={25}
            />
            <p
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "#0062bd",
                marginLeft: 8,
              }}
            >
              Save Extra
            </p>
            <p style={{ fontSize: 14, marginLeft: 8 }}>with 3 offers</p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item style={{ height: 40 }}>
          <div style={{ display: "flex" }}>
            <p
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "#0062bd",
                marginLeft: 8,
              }}
            >
              Exchange Offer:
            </p>
            <p style={{ fontSize: 14, marginLeft: 2 }}>
              Up to ₹3,000.00 off on Exchange
            </p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item style={{ height: 40 }}>
          <div style={{ display: "flex" }}>
            <p
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "#0062bd",
                marginLeft: 8,
              }}
            >
              EMI:
            </p>
            <p style={{ fontSize: 14, marginLeft: 2 }}>
              Standard EMI From ₹ 10,708.58/Month.
            </p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item style={{ height: 40 }}>
          {" "}
          <div style={{ display: "flex" }}>
            <p
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "#0062bd",
                marginLeft: 8,
              }}
            >
              GST Invoice:
            </p>
            <p style={{ fontSize: 14, marginLeft: 2 }}>
              Get GST invoice and save up to 28% on business purchases.
            </p>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default RateList;
