import React from 'react';
import './footer.css';
import ai from "../../assets/ai.png";

const Footer = () => (
  <div className="krb_footer section__padding">
    <div className="krb_footer-heading">
      <h1 className="gradient__text">We give you an unforgettable experience</h1>
    </div>

    <div className="krb_footer-links">
      <div className="krb_footer-links_logo">
        <img src={ai} alt="ai_logo" />
        <p>197 Tower Road Sliema Malta, <br /> All Rights Reserved</p>
      </div>
      <div className="krb_footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="krb_footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="krb_footer-links_div">
        <h4>Get in touch</h4>
        <p>197 Tower Road Sliema Malta</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="krb_footer-copyright">
      <p>@2022 Karamba. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
