import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Header.module.scss'
import logo from '../../assets/MarT.svg'
import iconN from '../../assets/nomera.svg'
import iconA from '../../assets/Uslugi.svg'
import iconP from '../../assets/Phone.svg'
import account from '../../assets/account.svg'
import HamburgerMenu from "../UI/HamburgerMenu/HamburgerMenu";

const Header = () => {

  const [menuActive, setMenuActive] = useState(false)

  return (
      <header className={classes.header}>
        <nav className={classes.header__nav}>
          <NavLink to="/main-page" className={classes.header__nav_link}>
            <img src={logo} alt={logo}/>
          </NavLink>
          <div className={classes.header__nav__btns__container}>
            <NavLink to="/numbers-page" className={classes.header__nav_link}>
              <div className={classes.header__nav__btns__container_gap}>
                <img src={iconN} alt="номера" />
                <p>Номера</p>
              </div>
            </NavLink>
            <NavLink to="/sosi" className={classes.header__nav_link}>
              <div className={classes.header__nav__btns__container_gap}>
                <img src={iconA} alt="Услуги" />
                <p>Услуги</p>
              </div>
            </NavLink>
            <NavLink to="/contact-page" className={classes.header__nav_link}>
              <div className={classes.header__nav__btns__container_gap}>
                <img src={iconP} alt="Контакты" />
                <p>Контакты</p>
              </div>
            </NavLink>
            <NavLink to="/login-page" className={classes.header__nav_link}>
              <div className={classes.header__nav__btns__container_gap}>
                <img src={account} alt="Регистрация" />
                <p>Регистрация/Войти</p>
              </div>
            </NavLink>
          </div>

          <div className={classes.header__nav__burgerBtn} onClick={() => setMenuActive(!menuActive)}>
            <span/>
          </div>
        </nav>
        <HamburgerMenu active={menuActive} setActive={setMenuActive} header='Меню навигации'/>
      </header>
  )
}


export default Header
