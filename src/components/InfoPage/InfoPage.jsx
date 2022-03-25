import React, {useState} from 'react';
import classes from "./InfoPage.module.scss";
import BackImgDescription from '../../assets/BackImgDescription.png'
import Clock from '../../assets/clock.svg'
import Mocktail from '../../assets/Moctail.svg'
import CookwareSet from '../../assets/CookwareSet.svg'
import ImgNumber from '../../assets/ImgNumber.png'
import IconSquare from '../../assets/IconSquare.svg'
import User from '../../assets/User.svg'
import Fork from '../../assets/Fork.svg'
import Add from '../../assets/Add.svg'
import Car from '../../assets/Car.svg'
import ExclamationMark from '../../assets/ExclamationMark.svg'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {NavLink} from "react-router-dom";
import Modal from "../Modal/Modal";
import {useLocation} from "react-router-dom";
import catalog from "../../mockdata/CatalogData";
import Tick from '../../assets/Tick.svg'



const InfoPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const [showTick, setShowTick] = useState(false)

  let content = <img src={Add} alt={''}/>
  if (showTick) {
    content = (
        <>
          <img src={Tick} alt={''}/>
        </>
    )
  }

  const location = useLocation();
  const numbers = catalog.find((numbers) => `#${numbers.id}` === location.hash);


  return (
      <>
        <Header/>
        <main className={classes.more}>

          <div className={classes.nav}>
            <p><NavLink to="/numbers-page" className={classes.nav__text}>Номера</NavLink> > Подробнее</p>
          </div>

          <div className={classes.container}>
            <div className={classes.container__hotelCard}>
              <img src={ImgNumber} alt={''}/>
              <div className={classes.container__hotelCard_info}>
                <span className={classes.container__hotelCard_info_text}>
                  <img src={IconSquare} alt={''}/>
                  <span>175 м<sup>2</sup></span>
                </span>
                <span className={classes.container__hotelCard_info_text}>
                  <img src={User} alt={''}/>
                  <span>До 6‑ти человек ( до 3‑х детей до 3‑х лет включительно)</span>
                </span>
                <span className={classes.container__hotelCard_info_text}>
                  <img src={Fork} alt={''}/>
                  <span>Тип питания определяется в зависимости от тарифа</span>
                </span>
                <span className={classes.container__hotelCard_info_text}>
                  <img src={ExclamationMark} alt={''}/>
                  <span>Возможно проживание с животными весом не более 5 кг</span>
                </span>
                <div className={classes.container__hotelCard__bottomInfo}>
                  <div className={classes.container__hotelCard__bottomInfo_info}>
                    <div className={classes.container__hotelCard__bottomInfo_info_price}>
                      <span>30.000 <span>₽/сутки</span></span>
                    </div>
                    <button className={classes.container__hotelCard__bottomInfo_info_btn}
                            onClick={() => setOpenModal(true)}>Броннировать
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.container__options} style={{backgroundImage: `url(${BackImgDescription})`}}>
              <span className={classes.container__options_title}>Дополнительные услуги</span>
              <div className={classes.container__options_info}>
                <div className={classes.container__options__block}>
                  <img src={CookwareSet} alt={''}/>
                  <span>Дополнительный завтрак</span>
                  <button className={classes.container__options__block_btn}
                          onClick={() => setShowTick(!showTick)}>{content}</button>
                  <span>+ 3000₽</span>
                </div>
                <div className={classes.container__options__block}>
                  <img src={Mocktail} alt={''}/>
                  <span>Мини-бар</span>
                  <button className={classes.container__options__block_btn}
                          onClick={() => setShowTick(!showTick)}>{content}</button>
                  <span>+ 2500₽</span>
                </div>
                <div className={classes.container__options__block}>
                  <img src={Clock} alt={''}/>
                  <span>Утренняя побудка</span>
                  <button className={classes.container__options__block_btn}
                          onClick={() => setShowTick(!showTick)}>{content}</button>
                </div>
                <div className={classes.container__options__block}>
                  <img src={Car} alt={''}/>
                  <span>Заказ трансфера</span>
                  <button className={classes.container__options__block_btn}
                          onClick={() => setShowTick(!showTick)}>{content}</button>
                  <span>+ 1500₽</span>
                </div>
              </div>
            </div>


          </div>

          {openModal &&
              <Modal setOpenModal={setOpenModal}/>
          }

        </main>
        <Footer/>
      </>
  );
};

export default InfoPage;