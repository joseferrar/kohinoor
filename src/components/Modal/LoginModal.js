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
import Login from "./Login";
import Register from "./Register";
import Forgot from "./Forgot";

function LoginModal({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [authType, setAuthType] = useState("login");

  const [username, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [occupation, setOccpation] = useState("");

  const onRegister = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("uname", username);
    formData.append("mobile", mobile);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("occupation", occupation);
    axios
      .post("http://192.168.1.195:5000/signup/", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ForgotPassword = () => {
    setAuthType("forgot");
  };

  return (
    <div>
      <Modal show={show} size="lg" style={{ marginTop: 150 }}>
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
                  style={{ marginTop: "200px" }}
                />
              </div>
            </Col>

            {authType === "login" && <Login setAuthType={setAuthType} />}
            {authType === "register" && <Register setAuthType={setAuthType} />}
            {authType === "forgot" && <Forgot setAuthType={setAuthType} />}
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LoginModal;
