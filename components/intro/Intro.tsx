import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../public/assets/MyHead.jpg";
import styles from "./Intro.module.css";
import Image from "next/image";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container">
        <div className={styles["about__container"]}>
          <div className={styles["about__me"]}>
            <div className={styles["about__me-image"]}>
              <img src={ME.src} />
            </div>
          </div>
          <div className={styles["about__content"]}>
            <div className={styles["about__cards"]}>
              <article className={styles["about__card"]}>
                <FaAward className={styles["about__icon"]} />
                <h5 style={{ fontSize: 25 }}>Experience</h5>
                <h6 style={{ fontSize: 19 }}>Web dev: 2 years</h6>
                <h6 style={{ fontSize: 19 }}>Machine Learning: 1 year</h6>
              </article>
              <article className={styles["about__card"]}>
                <VscFolderLibrary className={styles["about__icon"]} />
                <h5 style={{ fontSize: 25 }}>Projects</h5>
                <small style={{ fontSize: 20 }}>10+ Completed Projects</small>
              </article>
            </div>
            <div className={styles["about__content_paragraph"]}>
              <p style={{ fontSize: 25 }} >
                I have started making web projects since year 2 when I was
                studying at Hong Kong Polytechnic. I have also participated some
                STEM internship related to web development. Participated in small/medium-scaled projects.
              </p>
              <p style={{ fontSize: 25 }} >
                In my final year of degree, I have also learnt Machine Learning
                for my honours project, then I combined the Machine Learning and
                Web development together.
              </p>
            </div>
            <a href="#contact" className="btn btn-primary">
              Let's Talk about why we Celebrate our birthdays
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
