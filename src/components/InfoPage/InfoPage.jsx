import React, {useState} from 'react';
import classes from "./InfoPage.module.scss";
import BackImgDescription from '../../assets/BackImgDescription.png'
import Cloud from '../../assets/Cloud.svg'
import TV from '../../assets/TV.svg'
import Lamp from '../../assets/TableLamp.svg'
import Bolt from '../../assets/Bolt.svg'
import Glass from '../../assets/Glass.svg'
import Money from '../../assets/money.svg'
import Bathtub from '../../assets/Bathtub.svg'
import Mirror from '../../assets/Mirror.svg'
import Call from '../../assets/call.svg'
import WiFi from '../../assets/wifi.svg'
import IroningBoard from '../../assets/IroningBoard.svg'
import Scales from '../../assets/Scales.svg'
import ToothKit from '../../assets/ToothKit.svg'
import Pillow from '../../assets/Pillow.svg'
import Bed from '../../assets/Bed.svg'
import Mocktail from '../../assets/Moctail.svg'
import Balcony from '../../assets/Balcony.svg'
import Bar from '../../assets/Bar.svg'
import ImgNumber from '../../assets/ImgNumber.png'
import IconSquare from '../../assets/IconSquare.svg'
import User from '../../assets/User.svg'
import Fork from '../../assets/Fork.svg'
import ExclamationMark from '../../assets/ExclamationMark.svg'

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {NavLink} from "react-router-dom";
import Modal from "../Modal/Modal";

const InfoPage = () => {
  const [openModal, setOpenModal] = useState(false)

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
              <div className={classes.container__description_info}>
                <img src={Cloud} alt={'Иконка воздуха'}/>
                <span>Центральная система кондиционирования</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={TV} alt={'Телевизор'}/>
                <span>LCD телевизоры</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={Lamp} alt={'Лампа'}/>
                <span>Настольные лампы</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={Bolt} alt={'Электричество'}/>
                <span>Фен, Электрочайник, Утюг</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={Glass} alt={'Стакан'}/>
                <span>Чайная станция: чайные пары, чай, кофе, сахар</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={Money} alt={'Деньги'}/>
                <span>Сейф</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={Bathtub} alt={'Ванна'}/>
                <span>Ванная комната с душем и тропическим душем</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={Mirror} alt={'Зеркало'}/>
                <span>Косметическое зеркало</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={Call} alt={'Телефон'}/>
                <span>Телефон</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={WiFi} alt={'Wi-Fi'}/>
                <span>Высокоскоростнoй WI-FI</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={IroningBoard} alt={'Гладильная доска'}/>
                <span>Гладильная доска</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={Scales} alt={'Весы'}/>
                <span>Весы</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={ToothKit} alt={'Зубной набор'}/>
                <span>Зубной набор</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={Pillow} alt={'Меню подушек'}/>
                <span>Меню подушек</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={Bed} alt={'Кровать'}/>
                <span>Дополнительная кровать</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={Mocktail} alt={'Мини-бар'}/>
                <span>Мини-бар*</span>
              </div>
              <div className={classes.container__description_info}>
                <img src={Balcony} alt={'Балкон'}/>
                <span>Балкон</span>
              </div>
              <div className={classes.container__description_info_line}>
              </div>
              <div className={classes.container__description_info}>
                <img src={Bar} alt={'Балкон'}/>
                <span>Услуга мини-бар доступна при наличии депозита</span>
              </div>
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
                  <span>До 6‑ти человек (также можно разместить до 3‑х детей до 3‑х лет включительнo)</span>
                </div>
                <div className={classes.container__reservationCard_info__description}>
                  <img src={Fork} alt={'Иконка людей'}/>
                  <span>Тип питания определяется в зависимости от тарифа</span>
                </div>
                <div className={classes.container__reservationCard_info__description}>
                  <img src={ExclamationMark} alt={'Иконка людей'}/>
                  <span>Возможно проживание с животными весом не более 5 кг за дополнительную плату</span>
                </div>
                <button className={classes.container__reservationCard_info_btn} onClick={() => setOpenModal(true)}>
                  Бронировать
                </button>
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
            {openModal &&
                <Modal setOpenModal={setOpenModal}/>
            }
          </div>
        </main>
        <Footer/>
      </>
  );
};

export default InfoPage;