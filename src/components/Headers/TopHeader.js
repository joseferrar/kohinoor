import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router";
import CanvasModal from "../Modal/CanvasModal";
import LoginModal from "../Modal/LoginModal";
import "./TopHeader.css";

function TopHeader() {
  const [show, setShow] = useState(false);
  const [drawer, setDrawer] = useState(false);
  return (
    <Nav activeKey="/home" className="justify-content-center nav-primary">
      <Nav.Item className="d-flex" style={{ marginLeft: 800 }}>
        <i className="fas fa-map-marker-alt top-header-link nav-top-icon"></i>

        <Nav.Link href="/locator" className="top-header-link d-flex">
          Show Locator
        </Nav.Link>
        <p className="nav-divider">|</p>
      </Nav.Item>
      <Nav.Item className="d-flex">
        <Nav.Link eventKey="link-1" className="top-header-link">
          Track Your Order
        </Nav.Link>
        <p className="nav-divider">|</p>
      </Nav.Item>
      <Nav.Item className="d-flex" onClick={() => setDrawer(true)}>
        <i className="fas fa-map-marker-alt top-header-link nav-top-icon"></i>
        <Nav.Link eventKey="link-2" className="top-header-link">
          My Location
        </Nav.Link>
        <p className="nav-divider">|</p>
      </Nav.Item>

      <Nav.Item className="d-flex">
        <i className="fas fa-phone-alt  top-header-link nav-top-icon"></i>
        <Nav.Link
          eventKey="link-2"
          className="top-header-link"
          href="/contact us"
        >
          Contact Us
        </Nav.Link>
        <p className="nav-divider">|</p>
      </Nav.Item>

      <Nav.Item className="d-flex" onClick={() => setShow(true)}>
        <i className="far fa-user  top-header-link nav-top-icon"></i>
        <Nav.Link eventKey="link-2" className="top-header-link">
          Register / Sign in
        </Nav.Link>
        <p className="nav-divider">|</p>
      </Nav.Item>

      <Nav.Item className="d-flex">
        <i className="far fa-heart  top-header-link nav-top-icon"></i>
        <Nav.Link eventKey="link-2" className="top-header-link">
          Wishlist
        </Nav.Link>
        <p className="nav-divider">|</p>
      </Nav.Item>
      <LoginModal show={show} setShow={setShow} />
      <CanvasModal drawer={drawer} setDrawer={setDrawer} />
    </Nav>
  );
}

export default TopHeader;
