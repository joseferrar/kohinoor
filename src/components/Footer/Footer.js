import React from "react";
import FooterContent from "./FooterContent";
import Subscribe from "./Subscribe";

function Footer() {
  return (
    <div style={{ bottom: 0, width: '100%', height: '45%'}}>
      <Subscribe />
      <FooterContent />
    </div>
  );
}

export default Footer;
