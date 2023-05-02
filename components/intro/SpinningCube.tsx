import React from "react";
import styles from "./SpinningCube.module.css";
import ME from "../../public/assets/MyHead.jpg";

export const SpinningCube = () => {
  return (
    <div className={styles["App"]}>
      <div className={styles["cube"]}>
        <div
          className={styles["top"]}
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
          }}
        >
          <img src={ME.src} />
        </div>
        <div>
          <span style={{ "--i": 1 } as React.CSSProperties}></span>
          <span style={{ "--i": 2 } as React.CSSProperties}></span>
          <span style={{ "--i": 3 } as React.CSSProperties}></span>
          <span style={{ "--i": 4 } as React.CSSProperties}></span>
        </div>
      </div>
    </div>
  );
};
