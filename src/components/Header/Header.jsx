import React from 'react';
import classes from "./Header.module.scss"
import logo from "../../assets/MarT.svg"
import iconN from "../../assets/nomera.svg"
import iconA from "../../assets/Uslugi.svg"
import iconP from "../../assets/Phone.svg"
const Header = () => {
  return (
      <header className={classes.header}>
       <nav className={classes.header__nav}>
      <img src={logo} alt={logo}/>
         <div className={classes.header__nav__btns__container}>
           <div className={classes.header__nav__btns__container_gap}>
            <img src={iconN} alt="номера"/>
           <p>
             Номера
           </p>
         </div>
           <div className={classes.header__nav__btns__container_gap}>
           <img src={iconA} alt="Услуги"/>
           <p>
             Услуги
           </p>
           </div>
           <div className={classes.header__nav__btns__container_gap}>
           <img src={iconP} alt="Контакты"/>
           <p>
             Контакты
           </p>
           </div>
         </div>
       </nav>
      </header>
  );
};

export default Header;