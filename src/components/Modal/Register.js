import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import axios from "axios";
import { FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import { loginBtn, qus } from "./LoginModal.style";
import OtpModal from "./OtpModal";
import { rebuildData } from "../../utils/validateData";

function Register({ setAuthType }) {
  const [success, setSuccess] = useState(false);

  // const [otp, setOtp] = useState("");

  const formik = useFormik({
    initialValues: {
      uname: "",
      email: "",
      mobile: "",
      password: "",
      occupation: "",
    },
    validationSchema: yup.object({
      uname: yup.string().required("Username is required"),
      email: yup.string().email().required("Email is required"),
      mobile: yup.string().required("Mobile Number is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(6, "6 characters required"),
      occupation: yup.string().required("Occupation is required"),
    }),
    onSubmit: async (data) => {
      // const rebuildData = (values) => {
      //   let formData = new FormData();
      //   Object.keys(values).forEach(key => {
      //     formData.append(key, values[key]);
      //   });
      //   return formData;
      // };

      // var formData = rebuildData(data);

      let formData = rebuildData(data);
      console.log(formData);
      await axios
        .post("http://192.168.1.195:5000/signup/", formData)
        .then((res) => {
          console.log(res.data);
          setSuccess(true);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  // const onVerifyOTP = async (e) => {
  //   e.preventDefault();
  //   var formData = new FormData();
  //   formData.append("email", email);
  //   formData.append("otp", otp);

  //   await axios
  //     .post("http://192.168.1.195:5000/otp-login/", formData)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <Col xs={6} className="mt-3">
      {success ? (
        <OtpModal email={formik.values.email}/>
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
              value={formik.values.uname}
              onChange={formik.handleChange("uname")}
              style={{
                padding: "10px",
                border: "solid 1px grey",
                borderRadius: "20px",
                width: "350px",
                paddingLeft: "50px",
                maxWidth: "114%",
              }}
            />
            <small style={{ color: "red" }}>{formik.errors.uname}</small>
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
              value={formik.values.mobile}
              onChange={formik.handleChange("mobile")}
              style={{
                padding: "10px",
                border: "solid 1px grey",
                borderRadius: "20px",
                width: "350px",
                paddingLeft: "50px",
                maxWidth: "114%",
              }}
            />
            <small style={{ color: "red" }}>{formik.errors.mobile}</small>
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
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              style={{
                padding: "10px",
                border: "solid 1px grey",
                borderRadius: "20px",
                width: "350px",
                paddingLeft: "50px",
                maxWidth: "114%",
              }}
            />
            <small style={{ color: "red" }}>{formik.errors.email}</small>
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
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              style={{
                padding: "10px",
                border: "solid 1px grey",
                borderRadius: "20px",
                width: "350px",
                paddingLeft: "50px",
                maxWidth: "114%",
              }}
            />
            <small style={{ color: "red" }}>{formik.errors.password}</small>
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
              value={formik.values.occupation}
              onChange={formik.handleChange("occupation")}
              style={{
                padding: "10px",
                border: "solid 1px grey",
                borderRadius: "20px",
                width: "350px",
                paddingLeft: "50px",
                maxWidth: "114%",
              }}
            />
            <small style={{ color: "red" }}>{formik.errors.occupation}</small>
          </div>
          <Button
            variant="primary"
            style={loginBtn}
            onClick={formik.handleSubmit}
          >
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
