import React from 'react'

import classes from './Contact.module.scss'
import BackImg from '../../assets/BackContactImg.png'
import iconP from '../../assets/iconP.svg'
import iconM from '../../assets/iconM.svg'
import iconT from '../../assets/iconT.svg'
import iconG from '../../assets/iconG.svg'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Contact = () => (
  <>
    <Header />
    <main
      className={classes.contact_info}
      style={{ backgroundImage: `url(${BackImg})` }}
    >
      <div className={classes.wrapper}>
        <div className={classes.contact_info__contact}>
          <img src={iconP} alt="" />
          <p>89001373398 | 89287562664</p>
        </div>
        <div className={classes.contact_info__contact}>
          <img src={iconM} alt="" />
          <p>ymenya.netprav32@gmail.com</p>
        </div>
        <div className={classes.contact_info__contact}>
          <img src={iconG} alt="" />
          <p>Братский пер., 44 Ростов-на-Дону, Ростовская обл</p>
        </div>
        <div className={classes.contact_info__contact}>
          <img src={iconT} alt="" />
          <p>Прием гостей с 6:00-22:30</p>
        </div>
      </div>
    </main>
    <Footer />
  </>
)

export default Contact
