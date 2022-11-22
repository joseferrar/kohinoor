import axios from "axios";
import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { forgot, loginBtn, qus } from "./LoginModal.style";

function Forgot({ setAuthType }) {
  const [otpscreen, setOtpScreen] = useState(false);
  const [email, setEmail] = useState("");

  const navigateOtp = () => {
    setOtpScreen(true);
  };

  const onEmailSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
   
    formData.append("email", email)
    await axios
    .post("http://192.168.1.195:5000/send-email-otp", formData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  return (
    <Col xs={6} className="mt-5">
      {otpscreen === false ? (
        <>
          <h4
            style={{ fontWeight: 600, fontSize: "1.5rem", textAlign: "center" }}
          >
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <Button variant="primary" style={loginBtn} onClick={onEmailSubmit}>
            Continue
          </Button>
        </>
      ) : (
        <>
          <h4
            style={{ fontWeight: 600, fontSize: "1.5rem", textAlign: "center" }}
          >
            Enter OTP
          </h4>
          <div style={{ display: "flex", marginLeft: 20 }}>
            <p style={{ color: "#0062bd" }}>OTP sent to&nbsp;</p>
            <p style={{ color: "red" }}>{"godwin@gmail.com"}&nbsp;</p>
            <a href="/" style={{ textDecoration: "none" }}>
              Change?
            </a>
          </div>
          <br />
          <i
            class="fas fa-mobile"
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
            placeholder="Enter 6 digit OTP"
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
            <a
              href="#"
              style={{ textDecoration: "none", marginLeft: "auto", marginRight: 22, marginTop: -12}}
              onClick={() => setAuthType("register")}
            >
              &nbsp;Resend
            </a>
          </div>
          <Button variant="primary" style={loginBtn}>
            Continue
          </Button>
        </>
      )}
    </Col>
  );
}

export default Forgot;
