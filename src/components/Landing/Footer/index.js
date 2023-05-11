import React from "react";
import linkdin from "../../../images/landing/link.svg";
import fb from "../../../images/landing/fb.svg";
import insta from "../../../images/landing/insta.svg";
import tube from "../../../images/landing/tube.svg";
import twit from "../../../images/landing/twit.svg";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { FooterContainer } from "./styles";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div id="footer">
          <div id="footer_container">
            <div id="footer_container_top">
              <div id="footer_logo">
                <img src={logo} alt="img" />
                <p id="p">HotKup Incorporated</p>
                <p id="p">44 Grindstone Way</p>
                <p id="p">Waterdown L9H7B7</p>
                <p id="p">Ontario Canada</p>
              </div>
              <div id="footer_logo">
                <h1>RESOURCES</h1>
                <Link id="p">FAQ</Link>
                <Link id="p">Templates</Link>
                <Link id="p">Team Solutions</Link>
                <Link id="p">Webinars</Link>
                <Link id="p">Log In</Link>
              </div>
              <div id="footer_logo">
                <h1>ESSENTIALS</h1>
                <Link id="p">Apps</Link>
                <Link id="p">Automation</Link>
                <Link id="p">Integrations</Link>
              </div>
              <div id="footer_logo">
                <h1>PRICING</h1>
                <Link id="p">Standard</Link>
                <Link id="p">Premium</Link>
                <Link id="p">Enterprise</Link>
              </div>
              <div id="footer_logo">
                <h1>COMPANY</h1>
                <Link id="p">About</Link>
                <Link id="p">Jobs</Link>
                <Link id="p">Legal</Link>
              </div>
              <div id="footer_logo">
                <h1>SUPPORT</h1>
                <Link id="p">Blog</Link>
                <Link id="p">Developers</Link>
                <Link id="p">Help</Link>
              </div>
            </div>
            <div id="footer_container_bottom">
              <div id="footer_container_bottom_icons">
                <a href="/">
                  <img src={linkdin} alt="img" />
                </a>
                <a href="/">
                  <img src={fb} alt="img" />
                </a>
                <a href="/">
                  <img src={insta} alt="img" />
                </a>
                <a href="/">
                  <img src={twit} alt="img" />
                </a>
                <a href="/">
                  <img src={tube} alt="img" />
                </a>
              </div>
              <p>Copyright © 2021 Archimedis. All rights reserved.</p>
            </div>
          </div>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
