import React from "react";
import "./footer.css";
import { IcnFacebook, IcnInstagram, IcnLinkedin, IcnMail } from "./icn_SMM";

const thisYear = new Date();

const Footer = () => (
  <div className="container__footer">
    <div className="footer">
      <div className="footer__smm">
        <a
          href="mailto:lalalayka@gmail.com"
          className="footer__smm--item"
          rel="noopener noreferrer"
        >
          <IcnMail />
        </a>
        <a
          href="https://www.linkedin.com/in/sergekovalchuk"
          target="_blank"
          className="footer__smm--item"
          rel="noopener noreferrer"
        >
          <IcnLinkedin />
        </a>
        <a
          href="https://www.facebook.com/xyemoe"
          target="_blank"
          className="footer__smm--item"
          rel="noopener noreferrer"
        >
          <IcnFacebook />
        </a>
        <a
          href="https://www.instagram.com/xyemoe/"
          target="_blank"
          className="footer__smm--item"
          rel="noopener noreferrer"
        >
          <IcnInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <span>
          Sergey Kovalchuk&emsp;©&emsp;2011&#8202;—&#8202;
          {thisYear.getFullYear()}
        </span>
      </div>
    </div>
  </div>
);

export default Footer;
