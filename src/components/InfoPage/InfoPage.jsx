import React from 'react';
import classes from "./InfoPage.module.scss";
import BackImgDescription from '../../assets/BackImgDescription.png'
import Mocktail from '../../assets/Moctail.svg'
import Clock from '../../assets/Clock.svg'
import Add from '../../assets/Add.svg'
import Car from '../../assets/Car.svg'
import Cutlery from '../../assets/Cutlery.svg'
import ImgNumber from '../../assets/ImgNumber.png'
import IconSquare from '../../assets/IconSquare.svg'
import User from '../../assets/User.svg'
import Fork from '../../assets/Fork.svg'
import ExclamationMark from '../../assets/ExclamationMark.svg'

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {NavLink} from "react-router-dom";

const InfoPage = () => {
  return (
      <>
        <Header/>
        <main className={classes.more}>
          <div className={classes.nav}>
            <p><NavLink to="/numbers-page" className={classes.nav__text}>Номера</NavLink> > Подробнее</p>
          </div>
          <div className={classes.container}>

            <div className={classes.container__description}
                 style={{backgroundImage: `url(${BackImgDescription})`}}>
              <div className={classes.container__description_text}>
                <h2>Дополнительные услуги</h2>
              </div>
              <div className={classes.container__description_info}>
                <img src={Mocktail} alt={''}/>
                <span>Мини-бар</span>
                <span>+ 2500₽</span>
                <img src={Add} alt={''}/>
              </div>
              <div className={classes.container__description_info}>
                <img src={Cutlery} alt={''}/>
                <span>Дополнительный завтрак</span>
                <span>+ 3000₽</span>
                <img src={Add} alt={''}/>
              </div>
              <div className={classes.container__description_info}>
                <img src={Car} alt={''}/>
                <span>Заказ трансфера</span>
                <span>+ 1500₽</span>
                <img src={Add} alt={''}/>
              </div>
              <div className={classes.container__description_info}>
                <img src={Clock} alt={''}/>
                <span>Утренняя побудка</span>
                <img src={Add} alt={''}/>
              </div>
              <div className={classes.container__description_line}/>


            </div>
            <div className={classes.container__reservationCard}>
              <img src={ImgNumber} alt={'Картинка номера'}/>
              <div className={classes.container__reservationCard_info}>
                <div className={classes.container__reservationCard_info_price}>
                  <span>30.000 </span>
                  <span>₽/сутки</span>
                </div>
                <div className={classes.container__reservationCard_info__description}>
                  <img src={IconSquare} alt={'Иконка маштаба'}/>
                  <span>175м<sup>2</sup></span>
                </div>
                <div className={classes.container__reservationCard_info__description}>
                  <img src={User} alt={'Иконка людей'}/>
                  <span>До 6‑ти человек (также можно разместить до 3‑х детей до 3‑х лет включительно)</span>
                </div>
                <div className={classes.container__reservationCard_info__description}>
                  <img src={Fork} alt={'Иконка людей'}/>
                  <span>Тип питания определяется в зависимости от тарифа</span>
                </div>
                <div className={classes.container__reservationCard_info__description}>
                  <img src={ExclamationMark} alt={'Иконка людей'}/>
                  <span>Возможно проживание с животными весом не более 5 кг за дополнительную плату</span>
                </div>
                <div className={classes.container__reservationCard_info_btn}>
                  <p>Бронировать</p>
                </div>
              </div>
              <div className={classes.container__reservationCard__description}>
                <div className={classes.container__reservationCard__description__title}>
                  <h1>О номере</h1>
                </div>
                <div className={classes.container__reservationCard__description_text}>
                  В красивом интерьере Семейного люкса мы воплотили атмосферу домашнего уюта, сохранив
                  функциональность и комфорт премиального гостиничного номера. Современный дизайн спальни
                  и гостиной продуман в деталях — здесь все необходимое для общения и уединенного отдыха с
                  семьей. Фантастические панорамы природы из окон вашего номера, утонченный сервис и
                  невероятная территория комплекса подарят вам незабываемые эмоции от пребывания в отеле
                  MarT
                </div>
              </div>
            </div>
          </div>

        </main>
        <Footer/>
      </>
  );
};

export default InfoPage;