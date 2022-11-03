import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Subscribe() {
  return (
    <div>
      <div
        className="mt-5"
        style={{ width: "100%", height: "70px", backgroundColor: "#0061e0" }}
      >
        <Container>
          <Row md={5} className="justify-content-between">
            <Col md={1}>
              <i
                class="fas fa-envelope-open"
                style={{ padding: 16, fontSize: 38, color: "#fed700" }}
              ></i>
            </Col>
            <Col lg={4}>
              <h2
                style={{
                  color: "#fed700",
                  fontSize: "1.35038rem",
                  fontWeight: "500",
                  textAlign: "left",
                  marginTop: 5,
                }}
              >
                Subscribe to Newsletter
              </h2>
              <p style={{ textAlign: "left", color: "#fed700", width: 500 }}>
                We'll never share your email address with a any third party
              </p>
            </Col>

            <Col md={2}></Col>
            <Col md={4}>
              <Form className="d-flex mt-3">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  aria-label="Search"
                  style={{
                    width: 500,
                    borderBottomLeftRadius: 30,
                    borderTopLeftRadius: 30,
                  }}
                />
                <Button
                  color="warning"
                  style={{
                    borderBottomRightRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: "#fed700",
                    marginLeft: -2,
                    color: "#000",
                    fontWeight: 500,
                    borderLeftColor: "#fff",
                  }}
                >
                  Subscribe
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Subscribe;
