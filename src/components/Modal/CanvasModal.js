import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../App.css";
import Forgot from "./Forgot";
import Login from "./Login";
import Register from "./Register";

function CanvasModal({ drawer, setDrawer }) {
  const handleClose = () => setDrawer(false);
  const [authType, setAuthType] = useState("login");
  return (
    <>
      <Offcanvas show={drawer} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            style={{ fontWeight: 400, fontSize: "1.5rem" }}
          ></Offcanvas.Title>
        </Offcanvas.Header>
        {authType === "forgot" ? null : (
          <Offcanvas.Title>
            <h4
              style={{
                fontWeight: 600,
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              Welcome Back!
            </h4>
            <p style={{ color: "gray", textAlign: "center" }}>
              Login to manage your account.
            </p>
          </Offcanvas.Title>
        )}

        <Offcanvas.Body style={{ minWidth: "750px", marginTop: -30 }}>
          {authType === "login" && <Login setAuthType={setAuthType} />}
          {authType === "register" && <Register setAuthType={setAuthType} />}
          {authType === "forgot" && <Forgot setAuthType={setAuthType} />}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CanvasModal;
