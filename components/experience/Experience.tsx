import React from "react";

import styles from "./Experience.module.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

import { useState, useEffect } from "react";

import "animate.css";
import TrackVisibility from "react-on-screen";
import ShowMany from "../utilities/ShowMany";
import ShowOnce from "../utilities/ShowOnce";

const Experience = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(1);
      console.log(": HIHIH");
    }, 10000);
    // return () => clearInterval(interval);
  }, []);
  return (
    <section id="experience">
      <h5>
        <ShowMany
          mode_IN={"animate__zoomInDown"}
          mode_OUT={"animate__zoomOutDown"}
          speed={"animate__fast"}
        >
          Skills I have
        </ShowMany>
      </h5>
      <h2>
        <ShowMany
          mode_IN={"animate__zoomInDown"}
          mode_OUT={"animate__zoomOutDown"}
          speed={"animate__fast"}
        >
          Skills
        </ShowMany>
      </h2>
      <div className="container">
        <div className={styles["experience__container"]}>
          {/* animate.css */}
          <ShowMany
            mode_IN={"animate__slideInLeft"}
            mode_OUT={"animate__slideOutLeft"}
            speed={"animate__"}
          >
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
          </ShowMany>

          {/* animate.css */}
          <ShowMany
            mode_IN={"animate__slideInRight"}
            mode_OUT={"animate__slideOutRight"}
            speed={"animate__"}
          >
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
              </div>
            </div>
          </ShowMany>

          {/* animate.css */}
          <ShowMany
            mode_IN={"animate__slideInLeft"}
            mode_OUT={"animate__slideOutLeft"}
            speed={"animate__"}
          >
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
          </ShowMany>

          {/* animate.css */}
          <ShowMany
            mode_IN={"animate__slideInRight"}
            mode_OUT={"animate__slideOutRight"}
            speed={"animate__"}
          >
            <div className={styles["experience__backend"]}>
              <h3>Other Services</h3>
              <div className={styles["experience__content"]}>
                <article className={styles["experience__details"]}>
                  <BsFillPatchCheckFill
                    className={styles["experience__details-icon"]}
                  />
                  <h4>Google Cloud Platform</h4>
                </article>
                <article className={styles["experience__details"]}>
                  <BsFillPatchCheckFill
                    className={styles["experience__details-icon"]}
                  />
                  <h4>Git/GitHub</h4>
                </article>
                <article className={styles["experience__details"]}>
                  <BsFillPatchCheckFill
                    className={styles["experience__details-icon"]}
                  />
                  <h4>Docker</h4>
                </article>
                <article className={styles["experience__details"]}>
                  <BsFillPatchCheckFill
                    className={styles["experience__details-icon"]}
                  />
                  <h4>Heroku</h4>
                </article>
                <article className={styles["experience__details"]}>
                  <BsFillPatchCheckFill
                    className={styles["experience__details-icon"]}
                  />
                  <h4>Netlify</h4>
                </article>
              </div>
            </div>
          </ShowMany>
        </div>
      </div>
    </section>
  );
};

export default Experience;
