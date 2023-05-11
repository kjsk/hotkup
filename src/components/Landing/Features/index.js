import React from "react";
import { FeaturesSection, FeaturesSection2 } from "./styles";
import img from "../../../images/landing/card1.png";
import img2 from "../../../images/landing/card2.png";
import img3 from "../../../images/landing/card3.png";
import img4 from "../../../images/landing/card4.png";
import img5 from "../../../images/landing/m_card1.png";
import img6 from "../../../images/landing/m_card2.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import "aos/dist/aos.css";

const Features = () => {
  return (
    <>
      <FeaturesSection>
        <div
          id="FeaturesContainer"
          // data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <h1
          // data-aos="fade-up"
          >
            Features
          </h1>
          <h2
          // data-aos="fade-up"
          >
            We save users time by reducing the volume of project follow-ups and
            feedback; while delivering key metrics that other multifunctional
            tools do not.
          </h2>
        </div>
        <div id="Feature_card_container">
          <div
            id="card"
            // data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div id="card_img">
              <img src={img} alt="img" />
            </div>
            <div id="card_matter">
              <h1>Task automation</h1>
              <p>
                Create new project tasks, schedule a task, or create a recurring
                task. Get much-needed visibility into assigned work, completed
                tasks, and overdue tasks.
              </p>
              {/* <p style={{ fontSize: `12px` }}>
                Create new project tasks, schedule a task, or create a recurring
                task. Get much-needed visibility into assigned work, completed
                tasks, and overdue tasks.
              </p> */}
              <button>
                Learn More
                <ArrowRightOutlined className="icon" />
              </button>
            </div>
          </div>
          <div
            id="card"
            // data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div id="card_img">
              <img src={img2} alt="img" />
            </div>
            <div id="card_matter">
              <h1>Calendar view</h1>
              <p>
                Our calendar view enables you look at project work visually and
                measure elapsed time.
              </p>
              <button>
                Learn More
                <ArrowRightOutlined className="icon" />
              </button>
            </div>
          </div>
          <div
            id="card"
            // data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div id="card_img">
              <img src={img3} alt="img" />
            </div>
            <div id="card_matter">
              <h1>Run reports</h1>
              <p>
                Monitor business activity by generating reports on everything
                from quality testing to wastage.
              </p>
              <button>
                Learn More
                <ArrowRightOutlined className="icon" />
              </button>
            </div>
          </div>
          <div
            id="card"
            // data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div id="card_img">
              <img src={img4} alt="img" />
            </div>
            <div id="card_matter">
              <h1>Communicate with chat</h1>
              <p>
                Stay in continous communication by starting a 1:1 chat, category
                chat, or group chat.
              </p>
              <button>
                Learn More
                <ArrowRightOutlined className="icon" />
              </button>
            </div>
          </div>
        </div>
      </FeaturesSection>
      <FeaturesSection2>
        <div id="Features2Container">
          <div id="card">
            <img src={img5} alt="img" />
            <h1>See Our Pricing</h1>
            <p>
              Whether your team is a small-to-mid-size business, or a large
              enterprise we have a solution for you
            </p>
            <button>
              HotKup Pricing
              <ArrowRightOutlined className="icon" />
            </button>
          </div>
          <div id="card">
            <img src={img6} alt="img" />
            <h1>Tour HotKup</h1>
            <p>
              Find out firsthand what it's like to use HotKup. Explore cool
              features.
            </p>
            <button>
              Take a Tour
              <ArrowRightOutlined className="icon" />
            </button>
          </div>
        </div>
      </FeaturesSection2>
    </>
  );
};

export default Features;
