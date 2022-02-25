import React from 'react';
import classes from './Footer.module.scss'
import logo from "../../assets/MarT.svg"
const Footer = () => {
  return (
      <footer className={classes.footer}>
        <div className={classes.footer__nav}>
          <img src={logo} alt="логотип"/>
        </div>
      </footer>
  );
};

export default Footer;