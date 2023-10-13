import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css'; // Import the CSS file for styles

const Footer = () => {
  return (
    <div className="footer">
      <div className="test-style">TAG US TO GET A CHANCE TO GET FEATURED</div>

      <div className="company-name">
        <img src="/Resources/dressmart.png" alt="Dressmart Logo" />
      </div>

      <div className="test-style1">
        SIGN UP FOR OUR EMAIL <input type="email" />
        <button className="email-button">Submit</button>
      </div>

      <div className="company-name1">
        Due to the impact of Covid-19, we are currently experiencing minor
        delays with our shipping carrier
        <div className="shipping">
          Free shipping over $999
          <br />
          Free 5-day return shipping
        </div>
      </div>

      <div className="footer-style2">
        <div className="social-media-icons">
          <a href="https://www.facebook.com">
            <FaFacebook className="icon-style" />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitter className="icon-style" />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram className="icon-style" />
          </a>
          <a href="https://www.pinterest.com">
            <FaPinterest className="icon-style" />
          </a>
        </div>
      </div>

      <div className="footer-style">
        <NavLink to="/" className="nav-link">
          Sign in
        </NavLink>
        <NavLink to="/" className="nav-link">
          Shipping
        </NavLink>
        <NavLink to="/" className="nav-link">
          Returns
        </NavLink>
        <NavLink to="/" className="nav-link">
          Help
        </NavLink>
        <NavLink to="/" className="nav-link">
          Contact Us
        </NavLink>
        <NavLink to="/" className="nav-link">
          Size Guide
        </NavLink>
      </div>

      <div className="footer-style1">
        <NavLink to="/" className="nav-link">
          About Us
        </NavLink>
        <NavLink to="/" className="nav-link">
          Careers
        </NavLink>
        <NavLink to="/" className="nav-link">
          Dressmart Cares
        </NavLink>
      </div>

      <div className="footer-links">
        <Link className="nav-link">Sitemap</Link> |{" "}
        <Link className="nav-link">Terms of Service</Link> |{" "}
        <Link className="nav-link">Privacy Policy</Link>
      </div>

      <div className="copyright">
        © 2022 dressmart.com LLC. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;




