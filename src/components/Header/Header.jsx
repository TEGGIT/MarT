import React from 'react';
import classes from "./Header.module.scss"
import logo from "../../assets/MarT.svg"
import iconN from "../../assets/nomera.svg"
import iconA from "../../assets/Uslugi.svg"
import iconP from "../../assets/Phone.svg"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.header__nav}>
                <NavLink to="/main-page" className={classes.header__nav_link}>
                    <img src={logo} alt={logo}/>
                </NavLink>
                <div className={classes.header__nav__btns__container}>

                    <div className={classes.header__nav__btns__container_gap}>
                        <img src={iconN} alt="номера"/>
                        <p>
                            Номера
                        </p>
                    </div>

                    <NavLink to="/sosi" className={classes.header__nav_link}>
                        <div className={classes.header__nav__btns__container_gap}>
                            <img src={iconA} alt="Услуги"/>
                            <p>
                                Услуги
                            </p>
                        </div>
                    </NavLink>
                    <NavLink to="/contact-page" className={classes.header__nav_link}>
                        <div className={classes.header__nav__btns__container_gap}>
                            <img src={iconP} alt="Контакты"/>
                            <p>
                                Контакты
                            </p>

  return (
      <header className={classes.header}>
       <nav className={classes.header__nav}>
         <NavLink to="/main-page" className={classes.header__nav_link}>
      <img src={logo} alt={logo}/>
         </NavLink>
         <div className={classes.header__nav__btns__container}>
           <NavLink to="/numbers-page" className={classes.header__nav_link}>
           <div className={classes.header__nav__btns__container_gap}>

            <img src={iconN} alt="номера"/>
           <p>
             Номера
           </p>


         </div>
         </NavLink>
             <NavLink to="/sosi" className={classes.header__nav_link}>
           <div className={classes.header__nav__btns__container_gap}>
           <img src={iconA} alt="Услуги"/>
           <p>
             Услуги
           </p>
           </div>
             </NavLink>
           <NavLink to="/contact-page" className={classes.header__nav_link}>
           <div className={classes.header__nav__btns__container_gap}>
           <img src={iconP} alt="Контакты"/>
           <p>
             Контакты
           </p>

                        </div>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;