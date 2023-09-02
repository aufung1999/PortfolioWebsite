import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../public/assets/MyHead.jpg";
import styles from "./Intro.module.css";
import Image from "next/image";

import TrackVisibility from "react-on-screen";

import ShowOnce from "../utilities/ShowOnce";
import ShowMany from "../utilities/ShowMany";
import { SpinningCube } from "./SpinningCube";

const Intro = () => {
  return (
    <section id="about">
      <h5>
        {/* animate.css */}
        <ShowOnce mode={"animate__zoomInDown"} speed={"animate__fast"}>
          Get to know
        </ShowOnce>
      </h5>
      <h2>
        {/* animate.css */}

        <ShowOnce mode={"animate__zoomInDown"} speed={"animate__fast"}>
          About Me
        </ShowOnce>
      </h2>
      <div className="container">
        <div className={styles["about__container"]}>
          <div className={styles["about__me"]}>
            <div className={styles["about__me-image"]}>
              {/* animate.css */}

              {/* <ShowMany
                mode_IN={"animate__slideInDown"}
                mode_OUT={"animate__slideOutDown"}
                speed={"animate__slow"}
              > */}
              <SpinningCube />
              {/* <img src={ME.src} /> */}
              {/* </ShowMany> */}
            </div>
          </div>
          <div className={styles["about__content"]}>
            {/* animate.css */}

            <div className={styles["about__cards"]}>
              <article className={styles["about__card"]}>
                {/* animate.css */}

                <FaAward className={styles["about__icon"]} />
                <h5>Experience</h5>
                <h6>Web dev: 3+ years</h6>
                <h6>Machine Learning: 1 year</h6>
              </article>
              <article className={styles["about__card"]}>
                {/* animate.css */}

                <VscFolderLibrary className={styles["about__icon"]} />
                <h5>Projects</h5>
                <small>15+ Completed Projects</small>
              </article>
            </div>

            <div className={styles["about__content_paragraph"]}>
              <p>
                I embarked on my journey in web development during my second
                year of studies at Hong Kong Polytechnic. Since then, I have
                actively engaged in this field, including participating in STEM
                internships focused on web development and contributing to
                various small and medium-sized projects.
              </p>
              <p>
                In my final year of my degree program, I delved into machine
                learning as part of my honors project. I then seamlessly
                integrated my knowledge of machine learning with web
                development.
              </p>
            </div>
            <div className={styles["about__contact_btn"]}>
              <a href="#contact" className="btn btn-primary">
                Let&#39;s Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
