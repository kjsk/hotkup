import React from "react";
import { BannerSection } from "./styles";
import bannerimg from "../../../images/landing/banner.svg";
import bannerimg2 from "../../../images/landing/mob_banner.png";
import animi2 from "../../../images/landing/bg.png";
import man2 from "../../../images/landing/man2.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Nav } from "../../Nav";

function Banner() {
  const parallax = (e) => {
    document.querySelectorAll(".img2").forEach((layer) => {
      const speed = layer.getAttribute("data-speed");

      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  return (
    <BannerSection onMouseMove={parallax}>
      <Nav />
      <div id="bannerSectionContainer">
        <div id="image_container">
          <img src={bannerimg} alt="img" id="img1" />
          <img src={bannerimg2} alt="img" id="img2" />
        </div>
        <div id="image_matter">
          <div id="image_matter_b1">
            <h1>Team productivity and business intelligence, all in one.</h1>
            <p>
              Discover why HotKup will be as vital to your team as that first
              hot cup of morning coffee.
            </p>
            <div id="banner_search">
              <input type="text" placeholder="Your email address" />
              <button>
                Join Today - It&#39;s Free
                <ArrowRightOutlined className="icon" />
              </button>
            </div>
          </div>
          <div id="image_matter_b2">
            <img
              src={animi2}
              alt="img"
              id="img3"
              className="img2"
              data-speed="3"
            />

            <img
              src={man2}
              alt="img"
              id="img3"
              className="img2"
              data-speed="1.5"
            />
          </div>
        </div>
      </div>
    </BannerSection>
  );
}

export default Banner;
