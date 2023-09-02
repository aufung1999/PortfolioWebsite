import React from "react";

import "animate.css";
import TrackVisibility from "react-on-screen";

import { useState, useEffect } from "react";

type Props = {
  children: JSX.Element | any;
  seconds?: number;
  mode_IN: string | any;
  mode_OUT: string | any;
  speed?: string | any;
  animateOrder?: boolean | null | undefined;
  delay?: number | null;
};

const ShowMany = ({
  children,
  seconds = 7000,
  mode_IN = null,
  mode_OUT = null,
  speed = null,
  animateOrder = null,
  delay = null,
}: Props) => {
  // console.log(`delay-[${delay && delay * 250}]`);
  console.log(`animate__delay-${delay && delay * 250}ms`);

  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <div
          className={`${
            isVisible
              ? `animate__animated ${mode_IN} ${speed}  animate__delay-${
                  delay && delay * 250
                }ms`
              : `animate__animated ${mode_OUT} ${speed}`
          }`}
        >
          {children}
        </div>
      )}
    </TrackVisibility>
  );
};

export default ShowMany;
