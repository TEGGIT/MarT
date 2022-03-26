import React, {useState} from 'react';

import {services} from '../../mockdata/serviceData'

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import Modal from "../Modal/Modal";

import classes from "./InfoPage.module.scss";
import BackImgDescription from '../../assets/BackImgDescription.png'
import Add from '../../assets/Add.svg'
import Tick from '../../assets/Tick.svg'

const InfoPage = () => {
  const location = useLocation()
  const allNumbers = useSelector((state) => state.catalogReducer)
  const [thisNumber, setThisNumber] = useState(allNumbers.find((number) => location.hash === `#${number.id}`))
  console.log(thisNumber)
  const [openModal, setOpenModal] = useState(false)
  const [servicesState, setServicesState] = useState({
    breakfast: false,
    bar: false,
    morning: false,
    transfer: false,
  })

  const replaceServiceState = (service) => {
    if (servicesState[service.codeName]) {
      service.stateImage = Add
      setThisNumber({...thisNumber, price: thisNumber.price - service.price})
      setServicesState({...servicesState, [service.codeName]: false})
    } else {
      service.stateImage = Tick
      setThisNumber({...thisNumber, price: thisNumber.price + service.price})
      setServicesState({...servicesState, [service.codeName]: true})
    }
  }

  return (
      <>
        <Header/>
        <main className={classes.more}>

          <div className={classes.nav}>
            <p><NavLink to="/numbers-page" className={classes.nav__text}>Номера</NavLink> > Подробнее</p>
          </div>

          <div className={classes.container}>
            <div className={classes.container__hotelCard}>
              <img src={thisNumber.image} alt={''}/>
              <div className={classes.container__hotelCard_info}>
                {thisNumber.info.map((info) => {
                  return (
                      <span className={classes.container__hotelCard_info_text}>
                  <img src={info.image} alt={''}/>
                  <span>{info.description}</span>
                </span>
                  )
                })}
                <div className={classes.container__hotelCard__bottomInfo}>
                  <div className={classes.container__hotelCard__bottomInfo_info}>
                    <div className={classes.container__hotelCard__bottomInfo_info_price}>
                      <span>{thisNumber.price} ₽/сутки</span>
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
                {services.map((service) => {
                  return (
                      <div className={classes.container__options__block}>
                        <img src={service.image} alt={''}/>
                        <span>{service.name}</span>
                        <img src={service.stateImage} alt={service.codeName}
                             onClick={() => replaceServiceState(service)}/>
                        <span className={
                          servicesState[service.codeName]
                              ? classes.container__options__block_green
                              : classes.container__options__block_hidden}>{service.price ? `+${service.price}₽` : 'FREE'}</span>
                      </div>
                  )
                })}
              </div>
            </div>
          </div>
          {openModal && <Modal setOpenModal={setOpenModal}/>}
        </main>
        <Footer/>
      </>
  );
};

export default InfoPage;