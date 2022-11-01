import React from "react"

const style = {
  padding: "10px 0",
  borderBottom: "3px solid transparent",
  display: "inline-block",
  cursor: "pointer",
  backgroundColor: "#212121",
  width: "33.3%",
  color: "rgba(255, 255, 255, .7)",
  textAlign: "center"
}

const activeStyle = {
  ...style,
  color: "white",
  borderBottom: "3px solid #fed700"
}

const CustomTab = ({ children, isActive }) => (
  <span style={isActive ? activeStyle : style}>{children}</span>
)

export default CustomTab
