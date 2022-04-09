import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './HamburgerMenu.module.scss'
import iconN from "../../../assets/nomera.svg";
import iconA from "../../../assets/Uslugi.svg";
import iconP from "../../../assets/Phone.svg";
import account from "../../../assets/account.svg";


const HamburgerMenu = ({header, active}) => (
    <div className={active ? classes.menu__active : classes.menu}>
      <div className={classes.menu__blur}/>
      <div className={classes.menu__content}>
        <div className={classes.menu__header}>{header}</div>
        <ul>
          <li>
            <div className={classes.menu__container}>
              <NavLink to="/numbers-page" className={classes.menu__link}>
                <div className={classes.menu__link__container}>
                  <img src={iconN} alt="номера"/>
                  <p>Номера</p>
                </div>
              </NavLink>
              <NavLink to="/sosi" className={classes.menu__link}>
                <div className={classes.menu__link__container}>
                  <img src={iconA} alt="Услуги"/>
                  <p>Услуги</p>
                </div>
              </NavLink>
              <NavLink to="/contact-page" className={classes.menu__link}>
                <div className={classes.menu__link__container}>
                  <img src={iconP} alt="Контакты"/>
                  <p>Контакты</p>
                </div>
              </NavLink>
              <NavLink to="/registration-page" className={classes.menu__link}>
                <div className={classes.menu__link__container}>
                  <img src={account} alt="Регистрация"/>
                  <p>Регистрация</p>
                </div>
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
);

export default HamburgerMenu;