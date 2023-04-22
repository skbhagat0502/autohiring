import React from "react";
import ReactDOM from "react-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer(props) {
  return (
    <div className="footer-section">
      <div className="footer-logo">
        <img src="images/logo.png" />
      </div>
      <div className="contactus">
        <h3>Contact Us</h3>
        <p className="para">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p>example2020@gmail.com</p>
        <p>(904) 443-0343</p>
      </div>
      <div className="morefromus">
        <h3>More</h3>
        <p>About Us</p>
        <p>Products</p>
        <p>Career</p>
        <p>Contact Us</p>
      </div>
      <div className="social-handles">
        <div>
          <h3>Social Links</h3>
          <a className="facebook" href="#">
            <FaFacebookF />
          </a>
          <a className="instagram" href="#">
            <FaInstagram />
          </a>
          <a className="twiter" href="#">
            <FaTwitter />
          </a>
        </div>
        <p>© 2022 Food Truck Example</p>
      </div>
    </div>
  );
}

export default Footer;
