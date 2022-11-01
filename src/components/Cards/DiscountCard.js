/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function DiscountCard() {
  return (
    <div className="mt-5">
      <Row>
        <Col md="auto">
          <img
            src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/filters:quality(70)/fit-in/680x365/images/static_banner/WIDE_RANGE_OF_DIRECT_COOL_REF.jpg"
            width={"800"}
            height={"300"}
          />
        </Col>
        <Col xs lg="2">
          <img
            src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/filters:quality(70)/fit-in/680x365/images/static_banner/FROST-FREE_REF.jpg"
            width={"450"}
            height={"300"}
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md="auto">
          <img
            src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/filters:quality(70)/fit-in/680x365/images/static_banner/SIDE_BY_SIDE_REF.jpg"
            width={"450"}
            height={"300"}
          />
        </Col>
        <Col xs lg="2">
          <img
            src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/filters:quality(70)/fit-in/680x365/images/static_banner/THREE_DOOR_REF.jpg"
            width={"800"}
            height={"300"}
          />
        </Col>
      </Row>
    </div>
  );
}

export default DiscountCard;
