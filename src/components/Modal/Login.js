import React from "react";
import { Button, Col } from "react-bootstrap";
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

function Login({ setAuthType }) {
  return (
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
          className="login"
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
          className="login"
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
  );
}

export default Login;
