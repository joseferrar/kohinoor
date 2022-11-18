import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "react-bootstrap";
import { loginBtn } from "./LoginModal.style";
import { rebuildData } from "../../utils/validateData";

function OtpModal({ email }) {
  const formik = useFormik({
    initialValues: {
      email : email,
      otp: "",
    },
    validationSchema: yup.object({
      otp: yup.string().required("Otp is required"),
    }),
    onSubmit: async (data) => {
      let formData = rebuildData(data);
      await axios
        .post("http://192.168.1.195:5000/otp-login/", formData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
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
        name="otp"
        value={formik.values.otp}
        onChange={formik.handleChange("otp")}
        style={{
          padding: "10px",
          border: "solid 1px grey",
          borderRadius: "20px",
          width: "500px",
          paddingLeft: "50px",
          maxWidth: "114%",
        }}
      />
      <small style={{ color: "red" }}>{formik.errors.otp}</small>
      <Button variant="primary" style={loginBtn} onClick={formik.handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default OtpModal;
