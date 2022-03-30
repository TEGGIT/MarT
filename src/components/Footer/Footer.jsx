import React from 'react'
import classes from './Footer.module.scss'
import logo from '../../assets/MarT.svg'

const Footer = () => (
    <footer className={classes.footer}>
      <div className={classes.footer__nav}>
        <div className={classes.footer__nav__logo}>
          <img src={logo} alt="логотип" />
        </div>
        <div className={classes.footer__nav__text}>
          <p>
            © 2022 | Privacy Policy | made by a team of people who,
            unfortunately, were not taken into an honest company, as you can
            see, in vain
          </p>
        </div>
      </div>
    </footer>
  )

export default Footer
