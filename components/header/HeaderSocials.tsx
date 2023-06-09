import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import styles from "./Header.module.css"

const HeaderSocials = () => {
  return (
    <div className={styles.header__socials}>
      {/* <a href="https://www.linkedin.com/in/meri-gogichashvili/" target="_blank" rel="noreferrer" ><BsLinkedin /></a> */}
      <a href="https://github.com/aufung1999" target="_blank" rel="noreferrer" ><FaGithub /></a>
      {/* <a href="https://angel.co/u/meri-gogichashvili" target="_blank" rel="noreferrer" ><FaAngellist /></a> */}
    </div>
  )
}

export default HeaderSocials