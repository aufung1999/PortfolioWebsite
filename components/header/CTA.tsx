import React from "react";
import styles from "./Header.module.css";
// import CV from '../../assets/cv_meri_gogichashvili.pdf';

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a
        // href={}
        download
        className="btn"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let&#39;s talk
      </a>
    </div>
  );
};

export default CTA;
