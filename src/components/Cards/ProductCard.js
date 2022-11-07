/* eslint-disable jsx-a11y/alt-text */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import "../../App.css";

const iconstyles = {
  float: "right",
  fontSize: 24,
  backgroundColor: "#f4f4f4",
  borderRadius: 16,
  width: 34,
  height: 34,
  paddingTop: 5,
  marginTop: 5,
  paddingLeft: 5,
};

function ProductCard({ image, name, price, key }) {
  return (
    <div>
        <Row md={8} className="mt-5" style={{marginLeft: 80}}>
          <Col
            key={key}
            className="mx-2 product-card"
            style={{
              width: 320,
              height: "auto",
              backgroundColor: "#fff",
              borderRight: "1px solid #e7eaf3",
              marginLeft: 345
            }}
          >
            <i className="far fa-heart" style={iconstyles}></i>
            <img src={image} width="180" height="200" />
            <p
              style={{
                color: "#0062bd",
                fontWeight: "bold",
                fontSize: ".875rem",
                textAlign: "left",
              }}
            >
              {name}
            </p>
            <p
              style={{
                marginTop: -12,
                color: "#000",
                fontWeight: "600",
                fontSize: ".875rem",
                textAlign: "left",
              }}
            >
              Joy Price
            </p>
            <p
              style={{
                marginTop: -12,
                color: "#0061e0",
                fontWeight: "600",
                fontSize: "1.25038rem",
                textAlign: "left",
              }}
            >
              ₹{price}
              <Badge bg="danger" style={{ borderRadius: 22, marginLeft: 6 }}>
                28% off
              </Badge>
            </p>
            <p
              style={{
                marginTop: -12,
                color: "gray",
                fontSize: ".775rem",
                textAlign: "left",
              }}
            >
              MRP ₹48200
            </p>
            <div style={{ borderTop: "1px solid #e7eaf3" }}></div>
            <div className="d-flex justify-content-between">
              <p
                style={{
                  color: "gray",
                  fontSize: ".775rem",
                }}
              >
                Compare
              </p>
              <p
                style={{
                  color: "red",
                  fontSize: ".775rem",
                }}
              >
                Out of stack
              </p>
            </div>
          </Col>
        </Row>
    </div>
  );
}

export default ProductCard;
