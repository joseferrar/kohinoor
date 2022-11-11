import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SpecificationCard() {
  return (
    <div>
      <Card
        className="shadow"
        style={{ width: "auto", padding: 40, marginBottom: 40 }}
      >
        <p style={{ fontWeight: 700 }}>General Features</p>

        <Row>
          <Col>
            <p style={{ fontSize: 18, fontWeight: 500 }}>Brand</p>
            <p style={{ color: "gray", fontSize: 14, marginTop: -12 }}>
              Hitachi
            </p>

            <p style={{ fontSize: 18, fontWeight: 500 }}>SKU</p>
            <p style={{ color: "gray", fontSize: 14, marginTop: -12 }}>
              RAPG312HFEOZ1
            </p>

            <p style={{ fontSize: 18, fontWeight: 500 }}>Compressor</p>
            <p style={{ color: "gray", fontSize: 14, marginTop: -12 }}>
              Inverter Compressor
            </p>

            <p style={{ fontSize: 18, fontWeight: 500 }}>Dehumidification</p>
            <p style={{ color: "gray", fontSize: 14, marginTop: -12 }}>-</p>
          </Col>

          <Col>
            <p style={{ fontSize: 18, fontWeight: 500 }}>Ac Type</p>
            <p style={{ color: "gray", fontSize: 14, marginTop: -12 }}>
              Split Ac
            </p>

            <p style={{ fontSize: 18, fontWeight: 500 }}>
              Energy Efficiency (Star Rating)
            </p>
            <p style={{ color: "gray", fontSize: 14, marginTop: -12 }}>
              3 Star
            </p>

            <p style={{ fontSize: 18, fontWeight: 500 }}>Condenser</p>
            <p style={{ color: "gray", fontSize: 14, marginTop: -12 }}>
              Copper
            </p>

            <p style={{ fontSize: 18, fontWeight: 500 }}>Refrigerant Type</p>
            <p style={{ color: "gray", fontSize: 14, marginTop: -12 }}>R32</p>
          </Col>

          <Col>
            <p style={{ fontSize: 18, fontWeight: 500 }}>Model Number</p>
            <p style={{ color: "gray", fontSize: 14, marginTop: -12 }}>
              RAPG312HFEOZ1
            </p>

            <p style={{ fontSize: 18, fontWeight: 500 }}>Capacity In Tons</p>
            <p style={{ color: "gray", fontSize: 14, marginTop: -12 }}>
              1.0 Ton
            </p>

            <p style={{ fontSize: 18, fontWeight: 500 }}>
              Cooling Capacity (Watts)
            </p>
            <p style={{ color: "gray", fontSize: 14, marginTop: -12 }}>
              688.96
            </p>

            <p style={{ fontSize: 18, fontWeight: 500 }}>Remote Control</p>
            <p style={{ color: "gray", fontSize: 14, marginTop: -12 }}>Yes</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default SpecificationCard;
