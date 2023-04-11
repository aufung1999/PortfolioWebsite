import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container">
        <div className={styles.header__container}>
          <h5>Hello I</h5>
          <h1>Meri Gogichashvili</h1>
          <h5 className="text-light" style={{}}>
            Full-stack Developer
          </h5>
          <CTA />
          <a href="#contact" className={styles.scroll__down}>
            Scroll Down
          </a>
          <HeaderSocials />
        </div>
      </div>
    </header>
  );
};

export default Header;
