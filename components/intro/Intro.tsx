import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../public/assets/MyHead.jpg";
import styles from "./Intro.module.css";
import Image from "next/image";

import TrackVisibility from "react-on-screen";

import ShowOnce from "../utilities/ShowOnce";
import ShowMany from "../utilities/ShowMany";

const Intro = () => {
  return (
    <section id="about">
      <h5>
        {/* animate.css */}

        <ShowMany
          mode_IN={"animate__zoomInDown"}
          mode_OUT={"animate__zoomOutDown"}
          speed={"animate__slow"}
        >
          Get to know
        </ShowMany>
      </h5>
      <h2>
        {/* animate.css */}

        <ShowMany
          mode_IN={"animate__zoomInDown"}
          mode_OUT={"animate__zoomOutDown"}
          speed={"animate__slow"}
        >
          About Me
        </ShowMany>
      </h2>
      <div className="container">
        <div className={styles["about__container"]}>
          <div className={styles["about__me"]}>
            <div className={styles["about__me-image"]}>
              {/* animate.css */}

              <ShowMany
                mode_IN={"animate__slideInDown"}
                mode_OUT={"animate__slideOutDown"}
                speed={"animate__slow"}
              >
                <img src={ME.src} />
              </ShowMany>
            </div>
          </div>
          <div className={styles["about__content"]}>
            {/* animate.css */}

            <ShowMany
              mode_IN={"animate__slideInRight"}
              mode_OUT={"animate__slideOutRight"}
              speed={"animate"}
            >
              <div className={styles["about__cards"]}>
                <article className={styles["about__card"]}>
                  {/* animate.css */}

                  <FaAward className={styles["about__icon"]} />
                  <h5>Experience</h5>
                  <h6>Web dev: 2 years</h6>
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
                  I have started making web projects since year 2 when I was
                  studying at Hong Kong Polytechnic. I have also participated
                  some STEM internship related to web development. Participated
                  in small/medium-scaled projects.
                </p>
                <p>
                  In my final year of degree, I have also learnt Machine
                  Learning for my honours project, then I combined the Machine
                  Learning and Web development together.
                </p>
              </div>
            </ShowMany>
            <div className={styles["about__contact_btn"]}>
              <a href="#contact" className="btn btn-primary">
                Let&#39;s Talk about why we Celebrate our birthdays
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
