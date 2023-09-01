import React from "react";
import styles from "./Header.module.css";
// import CV from "../../public/assets/Resume.pdf";

const CTA = () => {
  return (
    <div className={styles.cta}>
      {/* <a
        href="assets/Resume_2.pdf"
        download
        className="btn"
      >
        Download CV
      </a> */}
      <a href="#contact" className="btn btn-primary">
        Let&#39;s talk
      </a>
    </div>
  );
};

export default CTA;
