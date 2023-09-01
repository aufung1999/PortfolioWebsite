import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import styles from "./Header.module.css";

import { useState, useEffect } from "react";

import "animate.css";
import TrackVisibility from "react-on-screen";
import ShowOnce from "../utilities/ShowOnce";
import ShowMany from "../utilities/ShowMany";

const Header = () => {
  return (
    <header id="home">
      <div className="container">
        <div className={styles["header__container"]}>
          {/* animate.css */}

          <ShowOnce
            mode={"animate__zoomInDown"}
            // mode_OUT={"animate__zoomOutDown"}
            speed={"animate"}
          >
            <h5>Hello I am</h5>
            <h1>Fung Au</h1>
            <h5 className="text-light" style={{ fontSize: 30 }}>
              Full-stack Developer
            </h5>
            <ShowMany
              mode_IN={"animate__fadeIn"}
              mode_OUT={"animate__fadeOut"}
              speed={"animate__fast"}
            >
              <CTA />
            </ShowMany>
          </ShowOnce>

          <a href="#contact" className={styles.scroll__down}>
            Scroll Down
          </a>
          <HeaderSocials />
        </div>
      </div>
    </header>
  );
};

export default Header;
