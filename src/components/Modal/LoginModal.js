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
import axios from "axios";

function LoginModal({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [authType, setAuthType] = useState("login");

  const onRegister = () => {
    var formData = new FormData();
    formData.append('uname', "godwin");
    formData.append('mobile', "975675675");
    formData.append('email', "godwin@gmail.com");
    formData.append('password', "ttrtrt");
    formData.append('occupation', "student");
    // const postData = {
    //   uname: "godwin",
    //   mobile: "9534534342432",
    //   email: "godwin@gmail.com",
    //   password: "test123546",
    //   occupation: "student"
    // }
    axios
      .post("http://192.168.1.195:5000/signup/",formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Modal show={show} size="lg" style={{marginTop: 150}}>
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
              <Col xs={6} className="mt-5">
                <div className="inp-grp">
                  {/* <InputGroup
                    className="mb-3 d-flex flex-row align-items-center m-4 border"
                    style={inputGroup1}
                  >
                    <i className="far fa-user" style={userIcon}></i>

                    <Form.Control
                      placeholder="Username"
                      className="login"
                    />
                  </InputGroup> */}
                  <i
                    class="fas fa-user"
                    style={{
                      position: "absolute",
                      padding: "10px",
                      fontSize: "16px",
                      borderRight: "1px solid grey",
                      margin: "5px",
                    }}
                  ></i>
                  <input
                    type="text"
                    style={{
                      padding: "10px",
                      border: "solid 1px grey",
                      borderRadius: "20px",
                      width: "400px",
                      maxWidth: "100%",
                      paddingLeft: "50px",
                    }}
                    placeholder="Enter Email/ Mobile number"
                  />
                  <br />
                  <br />

                  <i
                    class="fas fa-lock"
                    style={{
                      position: "absolute",
                      padding: "10px",
                      margin: "5px",
                      fontSize: "16px",
                      borderRight: "1px solid grey",
                    }}
                  ></i>
                  <input
                    type="text"
                    placeholder="Enter Password"
                    style={{
                      padding: "10px",
                      border: "solid 1px grey",
                      borderRadius: "20px",
                      width: "400px",
                      paddingLeft: "50px",
                      maxWidth: "100%",
                    }}
                  />

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
                <Button variant="primary" style={loginBtn} onClick={onRegister}>
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
