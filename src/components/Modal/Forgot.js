import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { forgot, loginBtn, qus } from "./LoginModal.style";

function Forgot({ setAuthType }) {
  // const []
  return (
    <Col xs={6} className="mt-5">
      <h4 style={{ fontWeight: 600, fontSize: "1.5rem", textAlign: "center" }}>
        Forget Password
      </h4>
      {/* <div style={{ display: "flex", marginLeft: 20 }}>
        <p style={{ color: "#0062bd" }}>OTP sent to&nbsp;</p>
        <p style={{ color: "red" }}>{"godwin@gmail.com"}&nbsp;</p>
        <a href="/" style={{ textDecoration: "none" }}>
          Change?
        </a>
      </div> */}
      <br />
      <i
        class="fas fa-envelope"
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
        placeholder="Email"
        name="otp"
        style={{
          padding: "10px",
          border: "solid 1px grey",
          borderRadius: "20px",
          width: "360px",
          paddingLeft: "50px",
          maxWidth: "114%",
        }}
      />
      <div style={qus}>
        <p>Remember your password?</p>
        <a
          href="#"
          style={{ textDecoration: "none" }}
          onClick={() => setAuthType("register")}
        >
          &nbsp;Login
        </a>
      </div>
      <Button variant="primary" style={loginBtn}>
        Continue
      </Button>
    </Col>
  );
}

export default Forgot;
