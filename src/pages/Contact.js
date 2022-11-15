import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumb";
import Divider from "../components/Divider";

function Contact() {
  return (
    <div>
      <Container>
        <Breadcrumbs />

        <div className="mt-3">
          <h1 className="text-center">Contact Us</h1>

          <Row className="mt-5">
            <Col>
              <h3
                style={{
                  borderBottom: "1px solid #dee2e6",
                  paddingBottom: "5px",
                }}
              >
                {" "}
                <span
                  style={{
                    borderBottom: "2px solid #fed700",
                    paddingBottom: "5px",
                  }}
                >
                  Leave Us
                </span>{" "}
                a message
              </h3>

              <Col>
                <Form.Label
                  htmlFor="inputPassword5"
                  style={{ fontWeight: 500 }}
                >
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  style={{
                    borderRadius: 30,
                  }}
                />
              </Col>
              <Row className="mt-4">
                <Col>
                  <Form.Label
                    htmlFor="inputPassword5"
                    style={{ fontWeight: 500 }}
                  >
                    Mobile
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Mobile No."
                    style={{
                      borderRadius: 30,
                    }}
                  />
                </Col>
                <Col>
                  <Form.Label
                    htmlFor="inputPassword5"
                    style={{ fontWeight: 500 }}
                  >
                    Email
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Email Address"
                    style={{
                      borderRadius: 30,
                    }}
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <Form.Label
                    htmlFor="inputPassword5"
                    style={{ fontWeight: 500 }}
                  >
                    Location
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Location"
                    style={{
                      borderRadius: 30,
                    }}
                  />
                </Col>
                <Col>
                  <Form.Label
                    htmlFor="inputPassword5"
                    style={{ fontWeight: 500 }}
                  >
                    Inquiry Reason
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type of Enquiry"
                    style={{
                      borderRadius: 30,
                    }}
                  />
                </Col>
              </Row>
              <Col className="mt-4">
                <Form.Label
                  htmlFor="inputPassword5"
                  style={{ fontWeight: 500 }}
                >
                  Inquiry Reason
                </Form.Label>
                <br />
                <textarea
                  className="form-control"
                  type="text"
                  placeholder="Type of Enquiry"
                  style={{
                    borderRadius: 30,
                    width: 600,
                    height: 120,
                  }}
                />
              </Col>
              <Button
                className="btn btn-warning mt-3"
                style={{ borderRadius: 30, width: 120, fontWeight: 600 }}
              >
                Submit
              </Button>
            </Col>
            <Col xs={5} style={{ marginLeft: 80 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                width="700"
                height="300"
                title="map"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
              <div className="mt-3">
                <h3
                  style={{
                    borderBottom: "1px solid #dee2e6",
                    paddingBottom: "5px",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      borderBottom: "2px solid #fed700",
                      paddingBottom: "5px",
                    }}
                  >
                    Administrative
                  </span>{" "}
                  Office
                </h3>
                <p
                  className="mt-4"
                  style={{ fontSize: "1.12525rem", fontWeight: 700 }}
                >
                  Kohinoor Electronics
                </p>
                <p style={{ color: "gray", fontSize: ".875rem", marginBottom: 2 }}>
                  Kohinoor Televideo Pvt Ltd, 1103, A Wing, 11th Flr, Naman
                  Midtown, Senapati Bapat Marg, Prabhadevi, Mumbai 400013
                </p>
                <p style={{ color: "gray", fontSize: ".875rem", marginBottom: 2 }}>
                  Telephone: 8657536713 / 9619588141
                </p>
                <p style={{ color: "gray", fontSize: ".875rem", marginBottom: 2 }}>
                  Email: <a href="mailto:">online@kohinoortv.com</a>
                </p>

                <p
                  className="mt-5"
                  style={{ fontSize: ".875rem", fontWeight: 700 }}
                >
                  Opening Hours
                </p>
                <p style={{ color: "gray", fontSize: 14, marginBottom: 2 }}>
                  We follow Government stipulated Covid Appropriate Measures &
                  Safety Protocol
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
