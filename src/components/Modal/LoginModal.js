import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../../App.css";
import Divider from "../Divider";
import {
  diverflex,
  diverText,
  facebook,
  forgot,
  form_control,
  google,
  grid1,
  inputGroup1,
  inputGroup2,
  loginBtn,
  modal,
  modalBody,
  modaldesc,
  modalheading,
  otpBtn,
  qus,
  social_flex,
  userIcon,
} from "./LoginModal.style";

function LoginModal({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [authType, setAuthType] = useState("login");
  return (
    <div>
      <Modal show={show} size="lg">
        <i class="fas fa-times" style={modal} onClick={handleClose}></i>
        <Modal.Body style={modalBody}>
          <Row>
            <Col xs={4} style={grid1}>
              <div>
                <h3 style={modalheading}>Welcome Back!</h3>
                <p style={modaldesc}>Login to manage your account.</p>
                <img
                  src="https://d203rnyfn54hc2.cloudfront.net/image/login_img.png"
                  alt="com"
                  style={{ marginTop: "80px" }}
                />
              </div>
            </Col>

            {authType === "login" ? (
              <Col xs={6} className="mt-3">
                <div>
                  <InputGroup
                    className="mb-3 d-flex flex-row align-items-center m-4 border"
                    style={inputGroup1}
                  >
                    <i className="far fa-user" style={userIcon}></i>

                    <Form.Control
                      placeholder="Username"
                      className="login"
                      style={form_control}
                    />
                  </InputGroup>

                  <InputGroup
                    className="mb-3 d-flex flex-row align-items-center m-4 border"
                    style={inputGroup2}
                  >
                    <i className="fas fa-lock" style={userIcon}></i>

                    <Form.Control
                      placeholder="Password"
                      className="login"
                      style={form_control}
                    />
                  </InputGroup>
                  <a href="/" style={forgot}>
                    Forgot Password?
                  </a>
                  <Button variant="primary" style={loginBtn}>
                    Login
                  </Button>
                  <div style={diverflex}>
                    <Divider />
                    <p style={diverText}>OR</p>
                    <Divider />
                  </div>
                  <Button variant="outline-secondary" style={otpBtn}>
                    Request OTP
                  </Button>
                  <div style={qus}>
                    <p>Do not have an account?</p>
                    <a
                      href="#"
                      style={{ textDecoration: "none" }}
                      onClick={() => setAuthType("register")}
                    >
                      &nbsp;Signup
                    </a>
                  </div>
                  <div style={social_flex}>
                    <Button type="submit" style={facebook}>
                      <i class="fab fa-facebook"></i>
                      &nbsp;Facebook
                    </Button>{" "}
                    <Button type="submit" style={google}>
                      <i class="fab fa-google"></i>
                      &nbsp;Google
                    </Button>{" "}
                  </div>
                </div>
              </Col>
            ) : (
              <Col xs={6} className="mt-3">
                <InputGroup
                  className="mb-3 d-flex flex-row align-items-center m-4 border"
                  style={inputGroup1}
                >
                  <i className="fas fa-user" style={userIcon}></i>

                  <Form.Control
                    placeholder="Name"
                    className="login"
                    style={form_control}
                  />
                </InputGroup>
                <InputGroup
                  className="mb-3 d-flex flex-row align-items-center m-4 border"
                  style={inputGroup1}
                >
                  <i className="fas fa-mobile" style={userIcon}></i>

                  <Form.Control
                    placeholder="Mobile"
                    className="login"
                    style={form_control}
                  />
                </InputGroup>
                <InputGroup
                  className="mb-3 d-flex flex-row align-items-center m-4 border"
                  style={inputGroup1}
                >
                  <i className="fas fa-envelope" style={userIcon}></i>

                  <Form.Control
                    placeholder="Email"
                    className="login"
                    style={form_control}
                  />
                </InputGroup>
                <InputGroup
                  className="mb-3 d-flex flex-row align-items-center m-4 border"
                  style={inputGroup1}
                >
                  <i className="fas fa-lock" style={userIcon}></i>

                  <Form.Control
                    placeholder="Password"
                    className="login"
                    style={form_control}
                  />
                </InputGroup>
                <InputGroup
                  className="mb-3 d-flex flex-row align-items-center m-4 border"
                  style={inputGroup1}
                >
                  <i className="fas fa-briefcase" style={userIcon}></i>

                  <Form.Control
                    placeholder="Occupation"
                    className="login"
                    style={form_control}
                  />
                </InputGroup>
                <Button variant="primary" style={loginBtn}>
                  Get Started
                </Button>
                <div style={qus}>
                  <p>Do not have an account?</p>
                  <a
                    href="#"
                    style={{ textDecoration: "none" }}
                    onClick={() => setAuthType("login")}
                  >
                    &nbsp;Login
                  </a>
                </div>
              </Col>
            )}
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LoginModal;
