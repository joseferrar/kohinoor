import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./FixedHeader.css";

function CollapsibleExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-fix">
      <Container className="navbar-container">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={
              "https://www.kohinoorelectronics.com/static/assets/img/logo/kohinoor-logo.png"
            }
            width="200"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleShow}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar.Collapse>

        <InputGroup
          className="mb-3 input"
          style={{
            backgroundColor: "transparent",
            borderColor: "transparent",
            borderWidth: 0,
          }}
        >
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              style={{
                backgroundColor: "#0000",
                borderRightColor: "#0000",
                borderTopLeftRadius: 22,
                borderBottomLeftRadius: 22,
                borderColor: "#fff",
                borderWidth: 2,
                fontSize: 16,
                fontWeight: 500,
                color: "#fed700",
              }}
            >
              All Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            className="search_input"
            aria-label="Text input with dropdown button"
            placeholder="Search for products, brand & more"
            style={{
              backgroundColor: "transparent",
              borderColor: "#fff",
              borderWidth: 2,
              color: "#fff",
            }}
          />
          <Button
            variant="secondary"
            style={{
              backgroundColor: "transparent",
              marginLeft: -30,
              borderWidth: 0,
              borderRadius: 14,
            }}
          >
            <i className="fas fa-search" style={{ color: "#fed700" }}></i>
          </Button>
        </InputGroup>
        <div className="d-flex" style={{ marginLeft: 50 }}>
          <i className="fas fa-headset"></i>
          <p
            style={{
              marginLeft: 4,
              color: "#fed700",
              fontSize: 14,
              width: 100,
            }}
          >
            Customer Care
          </p>

          <i
            className="fas fa-shopping-cart"
            style={{
              color: "#fed700",
              fontSize: 18,
              width: 100,
              textAlign: "center"
            }}
          ></i>
          <p
            style={{
              marginLeft: -32,
              color: "#fed700",
              fontSize: 14,
              width: 50,
            }}
          >
            My Cart
          </p>
        </div>
      </Container>

    </Navbar>
  );
}

export default CollapsibleExample;
