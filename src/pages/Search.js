import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumb";
import "../App.css";
import CtyAccordion from "../components/Accordion/CtyAccordion";
import Form from "react-bootstrap/Form";
import Divider from "../components/Divider";
import "toolcool-range-slider";

function Search() {
  return (
    <Container>
      <Breadcrumbs />
      <div className="mt-5">
        <Row>
          <Col md={3}>
            <CtyAccordion />
            <div>
              <h3
                className="mt-5"
                style={{
                  borderBottom: "1px solid #dee2e6",
                  paddingBottom: "5px",
                  fontSize: 18,
                }}
              >
                {" "}
                <span
                  style={{
                    borderBottom: "2px solid #fed700",
                    paddingBottom: "5px",
                  }}
                >
                  Filters
                </span>{" "}
              </h3>
              <p className="mt-5 mb-5" style={{ fontWeight: "bold" }}>
                Brands
              </p>
              <Divider />
              <p className="mt-5 mb-3" style={{ fontWeight: "bold" }}>
                Price
              </p>
              <toolcool-range-slider
                min="50"
                max="50"
                slider-bg-fill="#0000"
                pointer-border="1px solid #0000"
                pointer-border-hover="1px solid transparent"
                pointer-border-focus="1px solid transparent"
                slider-height="0.5rem"
                pointer-bg-focus="#fed700"
                pointer-bg="#fed700"
                pointer-bg2="#fed700"
                slider-bg="#f5f5f5"
                slider-bg-hover="#f5f5f5"
              ></toolcool-range-slider>

              <p className="mt-2" style={{ color: "#747474", fontSize: 13 }}>
                Price: ₹ 0 — ₹ 200000
              </p>
              <Button
                variant="warning"
                className="mt-5"
                style={{
                  backgroundColor: "#fed700",
                  fontWeight: "bold",
                  fontSize: 14,
                  width: 100,
                }}
              >
                Filter
              </Button>
            </div>
          </Col>
          <Col>
            <div style={{ justifyContent: "space-between", display: "flex" }}>
              <h3 style={{ fontSize: 25, fontWeight: 400 }}>
                Results for "JBL"
              </h3>
              <p style={{ color: "#747474", fontSize: 14 }}>
                Showing 0 - 0 of 0 results
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                padding: "10px",
              }}
            >
              <div>
                <i className="fas fa-th" style={{ fontSize: 17 }}></i>
                <i
                  className="fas fa-list mx-3"
                  style={{ fontSize: 17, color: "#747474" }}
                ></i>
              </div>

              <div style={{ display: "flex" }}>
                <Form.Select style={{ borderRadius: "20px", width: "200px" }}>
                  <option value="1">Sort by</option>
                  <option value="2">New Arrival</option>
                  <option value="3">Popular</option>
                  <option value="2">Price: low to high</option>
                  <option value="3">Price: high to low</option>
                </Form.Select>
                <Form.Select
                  style={{
                    borderRadius: "20px",
                    width: "200px",
                    marginLeft: 2,
                  }}
                >
                  <option value="1">Show All</option>
                  <option value="2">Show 40</option>
                  <option value="3">Show 60</option>
                </Form.Select>
              </div>

              <div style={{ display: "flex" }}>
                <Form.Control
                  type="number"
                  style={{ borderRadius: "20px", width: "60px" }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Search;
