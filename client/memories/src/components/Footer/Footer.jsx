import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-logo">
          <h2>memories</h2>
        </div>
        <div className="footer-items">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Accessibility</p>
          <p>More</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2022 Memories App</p>
      </div>
    </div>
  );
}

export default Footer;
