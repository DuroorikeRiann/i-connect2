import "./style.css";
import footerLogo from "../../assets/svg/footer-logo.svg";
import instagramLogo from "../../assets/svg/instagram.svg";
import twitterLogo from "../../assets/svg/twitter.svg";
import facebookLogo from "../../assets/svg/facebook.svg";
import linkedinLogo from "../../assets/svg/linkedin.svg";
import Button from "../button/Button";

const Footer = () => {
  return (
    <>
      <footer className="padding-y">
        <div className="logo-items">
          <img src={footerLogo} alt="footer logo" />
          <p>
            we are always ready to help by providing the best service for you.
            We believe o live can make your life better.
          </p>
          <div className="social-icon">
            <img src={instagramLogo} alt="" />
            <img src={facebookLogo} alt="" />
            <img src={twitterLogo} alt="" />
            <img src={linkedinLogo} alt="" />
          </div>
        </div>

        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Mission</li>
          <li>Services</li>
          <li>Testimonials</li>
          <li>Support</li>
        </ul>

        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Mission</li>
          <li>Services</li>
          <li>Testimonials</li>
          <li>Support</li>
        </ul>

        <div className="subscribe">
          <span>Subscribe</span>
          <p>Subscribe to get our newsletter and stay updated with us </p>
          <div className="subscribe-input">
            <input type="text" />
            <Button text='Subscribe' type='tertiary' />
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
