import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import axios from "axios";
import { loginBtn, qus } from "./LoginModal.style";

function Register({ setAuthType }) {
  const [success, setSuccess] = useState(false);
  const [username, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [occupation, setOccpation] = useState("");
  const [otp, setOtp] = useState("");

  const onRegister = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("uname", username);
    formData.append("mobile", mobile);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("occupation", occupation);
    await axios
      .post("http://192.168.1.195:5000/signup/", formData)
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onVerifyOTP = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("email", email);
    formData.append("otp", otp);

    await axios
      .post("http://192.168.1.195:5000/otp-login/", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Col xs={6} className="mt-3">
      {success ? (
        <div className="m-4">
          <h1>{email}</h1>
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
            placeholder="Otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{
              padding: "10px",
              border: "solid 1px grey",
              borderRadius: "20px",
              width: "500px",
              paddingLeft: "50px",
              maxWidth: "114%",
            }}
          />
          <Button variant="primary" style={loginBtn} onClick={onVerifyOTP}>
            Submit
          </Button>
        </div>
      ) : (
        <>
          {" "}
          <div className="m-4">
            <i
              class="fas fa-user"
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
              placeholder="Name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              style={{
                padding: "10px",
                border: "solid 1px grey",
                borderRadius: "20px",
                width: "500px",
                paddingLeft: "50px",
                maxWidth: "114%",
              }}
            />
          </div>
          <div className="m-4">
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
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={{
                padding: "10px",
                border: "solid 1px grey",
                borderRadius: "20px",
                width: "500px",
                paddingLeft: "50px",
                maxWidth: "114%",
              }}
            />
          </div>
          <div className="m-4">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "10px",
                border: "solid 1px grey",
                borderRadius: "20px",
                width: "500px",
                paddingLeft: "50px",
                maxWidth: "114%",
              }}
            />
          </div>
          <div className="m-4">
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "10px",
                border: "solid 1px grey",
                borderRadius: "20px",
                width: "500px",
                paddingLeft: "50px",
                maxWidth: "114%",
              }}
            />
          </div>
          <div className="m-4">
            <i
              class="fas fa-briefcase"
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
              placeholder="Occupation"
              value={occupation}
              onChange={(e) => setOccpation(e.target.value)}
              style={{
                padding: "10px",
                border: "solid 1px grey",
                borderRadius: "20px",
                width: "500px",
                paddingLeft: "50px",
                maxWidth: "114%",
              }}
            />
          </div>
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
        </>
      )}
    </Col>
  );
}

export default Register;
