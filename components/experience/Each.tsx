import React from "react";

import styles from "./Experience.module.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

import { useState, useEffect } from "react";

import "animate.css";
import TrackVisibility from "react-on-screen";
import ShowMany from "../utilities/ShowMany";
import ShowOnce from "../utilities/ShowOnce";

export default function EachThing({
  each,
  index,
  isVisible,
}: {
  each: string;
  index: number;
  isVisible: boolean;
}) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (isVisible === true) {
      const timer = setTimeout(() => {
        setDisplay(true);
      }, index * 300); // Adjust the delay (in milliseconds) between texts as needed
      return () => clearTimeout(timer);
    }

    return () => setDisplay(false);
  }, [isVisible]);

  return (
    <article
      className={`${styles["experience__details"]} ${
        isVisible && display
          ? `animate__animated ${"animate__fadeIn"} `
          : `hidden`
      }`}
      key={each}
    >
      <div className={styles["experience__details-icon"]}>
        <BsFillPatchCheckFill />
      </div>
      <div className={styles["experience__details-word"]}>
        <div className={`${display ? "" : "hidden"}`}>{each}</div>
      </div>
    </article>
  );
}
