/* eslint-disable jsx-a11y/alt-text */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import "../../App.css";
import { productData } from "../../data/ProductData";

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

function ProductCard() {
  return (
    <div>
      <Container>
        <Row md={8} className="mt-5">
          {productData.map((item, i) => (
            <Col
              className="mx-2 product-card"
              style={{
                width: 320,
                height: "auto",
                backgroundColor: "#fff",
                borderRight: "1px solid #e7eaf3",
              }}
            >
              <i className="far fa-heart" style={iconstyles}></i>
              <img src={item.product_img} width="180" height="200" />
              <p
                style={{
                  color: "#0062bd",
                  fontWeight: "bold",
                  fontSize: ".875rem",
                  textAlign: "left",
                }}
              >
                {item.product_name}
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
                ₹{item.price}
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
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductCard;
