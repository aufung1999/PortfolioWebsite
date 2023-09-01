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

  const frontend = [
    "HTML/CSS",
    "Javascript",
    "React/Next",
    "Redux",
    "Tailwind",
    "Bootstrap",
    "React Native",
  ];
  const backend = ["Python", "Fast API", "PHP", "NodeJS"];
  const databases = ["Firebase", "MongoDB", "MySQL"];
  const services = ["GCP", "Git/Github", "Docker", "Netlify", "Heroku"];

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
          {/* <ShowMany
            mode_IN={"animate__slideInLeft"}
            mode_OUT={"animate__slideOutLeft"}
            speed={"animate__"}
          > */}
            <div className={styles["experience__frontend"]}>
              <h4>Front-end Development</h4>
              <div className={styles["experience__content"]}>
                {frontend?.map((each) => (
                  <article className={styles["experience__details"]} key={each}>
                    <div className={styles["experience__details-icon"]}>
                      <BsFillPatchCheckFill />
                    </div>
                    <div className={styles["experience__details-word"]}>
                      <div>{each}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          {/* </ShowMany> */}

          {/* animate.css */}
          {/* <ShowMany
            mode_IN={"animate__slideInRight"}
            mode_OUT={"animate__slideOutRight"}
            speed={"animate__"}
          > */}
            <div className={styles["experience__backend"]}>
              <h4>Back-end Development</h4>
              <div className={styles["experience__content"]}>
                {backend?.map((each) => (
                  <article className={styles["experience__details"]} key={each}>
                    <BsFillPatchCheckFill
                      className={styles["experience__details-icon"]}
                    />
                    <div>{each}</div>
                  </article>
                ))}
              </div>
            </div>
          {/* </ShowMany> */}

          {/* animate.css */}
          {/* <ShowMany
            mode_IN={"animate__slideInLeft"}
            mode_OUT={"animate__slideOutLeft"}
            speed={"animate__"}
          > */}
            <div className={styles["experience__backend"]}>
              <h4>Database</h4>
              <div className={styles["experience__content"]}>
                {databases?.map((each) => (
                  <article className={styles["experience__details"]} key={each}>
                    <BsFillPatchCheckFill
                      className={styles["experience__details-icon"]}
                    />
                    <div>{each}</div>
                  </article>
                ))}
              </div>
            </div>
          {/* </ShowMany> */}

          {/* animate.css */}
          {/* <ShowMany
            mode_IN={"animate__slideInRight"}
            mode_OUT={"animate__slideOutRight"}
            speed={"animate__"}
          > */}
            <div className={styles["experience__backend"]}>
              <h4>Other Services</h4>
              <div className={styles["experience__content"]}>
                {services?.map((each) => (
                  <article className={styles["experience__details"]} key={each}>
                    <BsFillPatchCheckFill
                      className={styles["experience__details-icon"]}
                    />
                    <div>{each}</div>
                  </article>
                ))}
              </div>
            </div>
          {/* </ShowMany> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
