import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function BrandCard() {
  return (
    <div className="mt-5 mb-4">
      <Row>
        <Col xs lg="3" className="shadow p-2 mb-5 bg-white px-3">
          <Card style={{ width: "19rem" }}>
            <Card.Img
              variant="top"
              height={350}
              src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/filters:quality(70)/fit-in/337x337/images/static_banner/BOAT_pd5LpVE.jpg"
            />
          </Card>
        </Col>

        <Col xs lg="3" className="shadow p-2 mb-5 bg-white px-3">
          <Card style={{ width: "19rem" }}>
            <Card.Img
              variant="top"
              height={350}
              src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/filters:quality(70)/fit-in/337x337/images/static_banner/jbl_Cs5Yjel.jpg"
            />
          </Card>
        </Col>
        <Col xs lg="3" className="shadow p-2 mb-5 bg-white px-3">
          <Card style={{ width: "19rem" }}>
            <Card.Img
              variant="top"
              height={350}
              src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/filters:quality(70)/fit-in/337x337/images/static_banner/SAMPLE-1_e1hGaTN.jpg"
            />
          </Card>
        </Col>
        <Col xs lg="3" className="shadow p-2 mb-5 bg-white px-3">
          <Card style={{ width: "19rem" }}>
            <Card.Img
              variant="top"
              height={350}
              src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/filters:quality(70)/fit-in/337x337/images/static_banner/MARSHALL_razTMfg.jpg"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default BrandCard;
