import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me2.png";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container">
        <div className={styles.about__container}>
          <div className={styles["about__me"]}>
            <div className={styles["about__me-imageimage"]}>
              <img src={ME} alt="me" />
            </div>
          </div>
          <div className={styles["about__content"]}>
            <div className={styles["about__cards"]}>
              <article className={styles["about__card"]}>
                <FaAward className={styles["about__icon"]} />
                <h5>Experience</h5>
                <small>1 year</small>
              </article>
              <article className={styles["about__card"]}>
                <VscFolderLibrary className={styles["about__icon"]} />
                <h5>Projects</h5>
                <small>20+ Completed Projects</small>
              </article>
            </div>
            <p>
              I’ve spent the last several months in a remote environment,
              working with HTML, CSS, JavaScript, building everything from
              landing pages to APIs. My experience as a teacher in an
              international school helped me collaborate with fellow developers
              from all over the world. Additionally, working with kids isn’t an
              easy task, however, it has helped me become efficient, productive,
              and fast even in a very stressful environment, which is an
              important skill in the tech industry.
            </p>
            <a href="#contact" className={styles["btn btn-primary"]}>
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
