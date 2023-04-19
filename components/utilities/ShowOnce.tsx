import React from "react";

import "animate.css";
import TrackVisibility from "react-on-screen";

import { useState, useEffect } from "react";

type Props = {
  children: JSX.Element | any;
  seconds?: number;
  mode: string | any;
  speed?: string | any;
};

const ShowOnce = ({
  children,
  seconds = 7000,
  mode = null,
  speed = null,
}: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(1);
    }, seconds);
    return () => clearInterval(interval);
  }, []);

  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <div
          className={
            count === 0
              ? isVisible
                ? `animate__animated ${mode} ${speed}`
                : "hide"
              : ""
          }
        >
          {children}
        </div>
      )}
    </TrackVisibility>
  );
};

export default ShowOnce;
