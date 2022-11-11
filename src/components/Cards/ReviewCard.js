import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Rating } from "react-simple-star-rating";
import "../../App.css";
import { Button } from "react-bootstrap";

function ReviewCard() {
  const [rating, setRating] = useState(0);
  const [value, setValue] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => {
    setValue(value);
    console.log(value, index);
  };
  return (
    <div>
      <Card
        className="shadow"
        style={{ width: "auto", padding: 40, marginBottom: 40 }}
      >
        <Row>
          <Col sm>
            <p
              style={{ fontSize: "1.12525rem", fontWeight: 400, color: "gray" }}
            >
              Based on 0 reviews
            </p>
            <h2 style={{ fontSize: 30, fontWeight: 900 }}>0.0</h2>
            <p style={{ marginTop: -14 }}>overall</p>
            <div style={{ display: "flex" }}>
              <i
                className="fas fa-star"
                style={{ color: "#fed700", fontSize: 13 }}
              ></i>
              <i
                className="fas fa-star"
                style={{ color: "#fed700", fontSize: 13 }}
              ></i>
              <i
                className="fas fa-star"
                style={{ color: "#fed700", fontSize: 13 }}
              ></i>
              <i
                className="fas fa-star"
                style={{ color: "#fed700", fontSize: 13 }}
              ></i>
              <i
                className="fas fa-star"
                style={{ color: "#fed700", fontSize: 13 }}
              ></i>
              <ProgressBar style={{ width: 200, height: 10, marginLeft: 24 }} />
              <small className="mx-3">0</small>
            </div>
            <div className="mt-4" style={{ display: "flex" }}>
              <i
                className="fas fa-star"
                style={{ color: "#fed700", fontSize: 13 }}
              ></i>
              <i
                className="fas fa-star"
                style={{ color: "#fed700", fontSize: 13 }}
              ></i>
              <i
                className="fas fa-star"
                style={{ color: "#fed700", fontSize: 13 }}
              ></i>
              <i
                className="fas fa-star"
                style={{ color: "#fed700", fontSize: 13 }}
              ></i>
              <i
                className="far fa-star"
                style={{ color: "gray", fontSize: 13 }}
              ></i>
              <ProgressBar style={{ width: 200, height: 10, marginLeft: 24 }} />
              <small className="mx-3">0</small>
            </div>
            <div className="mt-4" style={{ display: "flex" }}>
              <i
                className="fas fa-star"
                style={{ color: "#fed700", fontSize: 13 }}
              ></i>
              <i
                className="fas fa-star"
                style={{ color: "#fed700", fontSize: 13 }}
              ></i>
              <i
                className="fas fa-star"
                style={{ color: "#fed700", fontSize: 13 }}
              ></i>
              <i
                className="far fa-star"
                style={{ color: "gray", fontSize: 13 }}
              ></i>
              <i
                className="far fa-star"
                style={{ color: "gray", fontSize: 13 }}
              ></i>
              <ProgressBar style={{ width: 200, height: 10, marginLeft: 24 }} />
              <small className="mx-3">0</small>
            </div>
            <div className="mt-4" style={{ display: "flex" }}>
              <i
                className="fas fa-star"
                style={{ color: "#fed700", fontSize: 13 }}
              ></i>
              <i
                className="fas fa-star"
                style={{ color: "#fed700", fontSize: 13 }}
              ></i>
              <i
                className="far fa-star"
                style={{ color: "gray", fontSize: 13 }}
              ></i>
              <i
                className="far fa-star"
                style={{ color: "gray", fontSize: 13 }}
              ></i>
              <i
                className="far fa-star"
                style={{ color: "gray", fontSize: 13 }}
              ></i>
              <ProgressBar style={{ width: 200, height: 10, marginLeft: 24 }} />
              <small className="mx-3">0</small>
            </div>
            <div className="mt-4" style={{ display: "flex" }}>
              <i
                className="fas fa-star"
                style={{ color: "#fed700", fontSize: 13 }}
              ></i>
              <i
                className="far fa-star"
                style={{ color: "gray", fontSize: 13 }}
              ></i>
              <i
                className="far fa-star"
                style={{ color: "gray", fontSize: 13 }}
              ></i>
              <i
                className="far fa-star"
                style={{ color: "gray", fontSize: 13 }}
              ></i>
              <i
                className="far fa-star"
                style={{ color: "gray", fontSize: 13 }}
              ></i>
              <ProgressBar style={{ width: 200, height: 10, marginLeft: 24 }} />
              <small className="mx-3">0</small>
            </div>
          </Col>

          <Col sm>
            {" "}
            <p
              style={{ fontSize: "1.12525rem", fontWeight: 400, color: "gray" }}
            >
              Add a review
            </p>
            <div style={{ display: "flex" }}>
              <p style={{ fontWeight: "bold", fontSize: 14, marginTop: 8 }}>
                Your Review
              </p>
              {/* <textarea style={{width: 400, height: 100}}/> */}
              <div
                className="rating_star_div"
                sytle
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <Rating
                  onClick={handleRating}
                  onPointerEnter={onPointerEnter}
                  onPointerLeave={onPointerLeave}
                  onPointerMove={onPointerMove}
                />
                &nbsp;
                <div className="rating_text_div">
                  {value === 1 && <p>Poor</p>}
                  {value === 2 && <p>Fair</p>}
                  {value === 3 && <p>Good</p>}
                  {value === 4 && <p>Excellent</p>}
                  {value === 5 && <p>WOW!!!</p>}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", marginTop: 8 }}>
              <p style={{ fontWeight: "bold", fontSize: 14, marginTop: 8 }}>
                Your Review
              </p>

              <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <textarea
                  className="form-control"
                  style={{ width: 450, height: 120, borderRadius: 20 }}
                />
              </div>
            </div>
            <div style={{ display: "flex", marginTop: 20 }}>
              <p style={{ fontWeight: "bold", fontSize: 14, marginTop: 8 }}>
                Name
              </p>

              <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <input
                  className="form-control"
                  style={{ width: 450, height: 45, borderRadius: 20 }}
                />
              </div>
            </div>
            <div style={{ display: "flex", marginTop: 20 }}>
              <p style={{ fontWeight: "bold", fontSize: 14, marginTop: 8 }}>
                Email
              </p>

              <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <input
                  type="email"
                  className="form-control"
                  style={{ width: 450, height: 45, borderRadius: 20 }}
                />
              </div>
            </div>
            <div style={{ display: "flex", marginTop: 20 }}>
              <p style={{ fontWeight: "bold", fontSize: 14, marginTop: 8 }}>
                Mobile
              </p>

              <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <input
                  type="email"
                  className="form-control"
                  style={{ width: 450, height: 45, borderRadius: 20 }}
                />
              </div>
            </div>
            <div style={{ display: "flex", marginTop: 20, marginLeft: 100 }}>
              <Button
                variant="warning"
                style={{
                  borderRadius: 20,
                  color: "white",
                  fontWeight: "bold",
                  width: 150,
                  fontSize: 16,
                }}
              >
                Add Review
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default ReviewCard;
