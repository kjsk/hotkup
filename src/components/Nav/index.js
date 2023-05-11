import React, { useEffect, useState } from "react";
import { NavSection } from "./styles";
import { Link } from "react-router-dom";
import img from "../../images/logo.png";
import { Modal } from "antd";
import { Contact } from "../Landing/Contact";

export const Nav = () => {
  const [contact, setContact] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [, setButton] = useState();

  const handelCancel = () => {
    setContact(false);
  };
  useEffect(() => {
    window.addEventListener("resize", showButton);

    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("resize", showButton);

      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <>
      <NavSection>
        <div id={navbar ? "NavSection" : "NavSection2"} className="NavSection">
          <Link
            to="/"
            style={{
              width: `fit-content`,
              height: `fit-content`,
              margin: `auto 0`,
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <img src={img} alt="img" />
          </Link>
          <button onClick={() => setContact(true)}>Contact Us</button>
        </div>
        <Modal
          centered
          visible={contact}
          width={1000}
          footer={null}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
          onCancel={handelCancel}
          bodyStyle={{ backgroundColor: `white`, height: `100%`, padding: `0` }}
          style={{ backgroundColor: `white`, height: `100%`, padding: `0` }}
          maskStyle={{
            backgroundColor: `white`,
            height: `fit-content`,
            padding: `0`,
          }}
        >
          <div id="navcont">
            <Contact />
          </div>
        </Modal>
      </NavSection>
    </>
  );
};
