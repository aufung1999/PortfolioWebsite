import React from "react";

import styles from "./Experience.module.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

import { useState, useEffect } from "react";

import "animate.css";
import TrackVisibility from "react-on-screen";
import ShowMany from "../utilities/ShowMany";
import ShowOnce from "../utilities/ShowOnce";
import EachThing from "./Each";

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
        <ShowOnce
          mode={"animate__zoomInDown"}
          speed={"animate__fast"}
        >
          Skills I have
        </ShowOnce>
      </h5>
      <h2>
        <ShowOnce
          mode={"animate__zoomInDown"}
          speed={"animate__fast"}
        >
          Skills
        </ShowOnce>
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
              {frontend?.map((each, index) => (
                <TrackVisibility key={each}>
                  {({ isVisible }) => (
                    <EachThing
                      key={each}
                      each={each}
                      index={index}
                      isVisible={isVisible}
                    />
                  )}
                </TrackVisibility>
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
              {backend?.map((each, index) => (
                <TrackVisibility key={each}>
                  {({ isVisible }) => (
                    <EachThing
                      key={each}
                      each={each}
                      index={index}
                      isVisible={isVisible}
                    />
                  )}
                </TrackVisibility>
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
              {databases?.map((each, index) => (
                <TrackVisibility key={each}>
                  {({ isVisible }) => (
                    <EachThing
                      key={each}
                      each={each}
                      index={index}
                      isVisible={isVisible}
                    />
                  )}
                </TrackVisibility>
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
              {services?.map((each, index) => (
                <TrackVisibility key={each}>
                  {({ isVisible }) => (
                    <EachThing
                      key={each}
                      each={each}
                      index={index}
                      isVisible={isVisible}
                    />
                  )}
                </TrackVisibility>
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
