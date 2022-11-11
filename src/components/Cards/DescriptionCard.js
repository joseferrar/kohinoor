import React from "react";
import Card from "react-bootstrap/Card";

function DescriptionCard() {
  return (
    <div>
      <Card className="shadow" style={{ width: "auto", padding: 40, marginBottom: 40 }}>
        <p style={{ fontSize: 14, color: "gray" }}>
          Experience a comfortable atmosphere like never before, when you buy
          Hitachi Shizen 3100S 1 Ton 3 Star Inverter Split AC that provides
          superior cooling performance. It operates without a stabilizer,
          protecting the AC from voltage fluctuations. It comes with a tropical
          rotary compressor for giving a long-lasting performance. Featuring the
          most efficient purifying technology. The purified air is then
          circulated in the room, ensuring you and your family can always
          breathe clean and healthy air.
        </p>
        <div style={{ display: "flex", marginTop: 22 }}>
          <p style={{ fontSize: 14, fontWeight: "bold", color: "gray" }}>
            SKU:{" "}
          </p>
          <p style={{ fontSize: 14, color: "gray" }}>&nbsp;RAPG312HFEOZ1</p>
          <p style={{ fontSize: 14, color: "gray", marginLeft: 25 }}>/</p>
          <p
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "gray",
              marginLeft: 25,
            }}
          >
            Category:{" "}
          </p>
          <a href="#" style={{ fontSize: 14, textDecoration: "none" }}>
            &nbsp;Air Conditioner
          </a>
        </div>
      </Card>
    </div>
  );
}

export default DescriptionCard;
