import React from "react";

import styles from "./Experience.module.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container">
        <div className={styles["experience__container"]}>
          <div className={styles["experience__frontend"]}>
            <h3>Front-end Development</h3>
            <div className={styles["experience__content"]}>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>HTML</h4>
              </article>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>CSS</h4>
              </article>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>JavaScript</h4>
              </article>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>React</h4>
              </article>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>Redux</h4>
              </article>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>Next</h4>
              </article>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>Tailwind</h4>
              </article>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>Bootstrap</h4>
              </article>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>React Native</h4>
              </article>
            </div>
          </div>
          <div className={styles["experience__backend"]}>
            <h3>Back-end Development</h3>
            <div className={styles["experience__content"]}>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>Python</h4>
              </article>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>Fast API</h4>
              </article>

              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>PHP</h4>
              </article>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>NodeJS</h4>
              </article>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>Git/GitHub</h4>
              </article>
            </div>
          </div>
          <div className={styles["experience__backend"]}>
            <h3>Database</h3>
            <div className={styles["experience__content"]}>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>Firebase</h4>
              </article>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>MongoDB</h4>
              </article>
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>MySQL</h4>
              </article>
            </div>
          </div>
          <div className={styles["experience__backend"]}>
            <h3>Other Services</h3>
            <div >
              <article className={styles["experience__details"]}>
                <BsFillPatchCheckFill
                  className={styles["experience__details-icon"]}
                />
                <h4>Google Cloud Platform</h4>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
