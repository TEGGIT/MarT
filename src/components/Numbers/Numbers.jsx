import React from 'react';
import classes from "./Numbers.module.scss"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import mainImage from "../../assets/BackNumbers.png"
import imageOne from "../../assets/imageNumbers1.png"
import iconOne from "../../assets/IconNumbers1.svg"
import iconTwo from "../../assets/iconNumbers2.svg"
import iconThree from "../../assets/iconNumbers3.svg"
import iconFour from "../../assets/iconNumbers4.svg"
import {NavLink} from "react-router-dom";


const Numbers = () => {
  return (
      <>
        <Header/>
        <main className={classes.main}>
          <section className={classes.main__section}>
            <div className={classes.main__section__contentTop} style={{backgroundImage: `url(${mainImage})`}}>
              <div className={classes.main__section__contentTop__container}>
                <div className={classes.main__section__contentTop__container__title}>
                  <h1>Номера</h1>
                </div>

                <nav className={classes.main__section__contentTop__container__nav}>
                  <ul>
                    <li>All</li>
                    <li>Family room</li>
                    <li>Delux</li>
                    <li>Presidential Suite</li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className={classes.main__section__content}>
              <div className={classes.main__section__content__container}>
                <div className={classes.main__section__content__container__card}>

                  <div className={classes.main__section__content__container__card__image}>
                    <img src={imageOne} alt="Изображение номера"/>


                  </div>
                  <div className={classes.main__section__content__container__card__info}>
                    <div className={classes.main__section__content__container__card__info__text_top}>
                      <p>
                        Семейный номер
                      </p>


                    </div>
                    <div className={classes.main__section__content__container__card__info__text}>

                      <img src={iconOne} alt="Иконка"/>
                      <p>
                        175 м2
                      </p>


                    </div>
                    <div className={classes.main__section__content__container__card__info__text}>

                      <img src={iconTwo} alt="Иконка"/>
                      <p>
                        До 6‑ти человек (также можно разместить до 3‑х детей до 3‑х лет включительно)
                      </p>


                    </div>
                    <div className={classes.main__section__content__container__card__info__text}>

                      <img src={iconThree} alt="Иконкa"/>
                      <p>
                        Тип питания определяется в зависимости от тарифа
                      </p>


                    </div>
                    <div className={classes.main__section__content__container__card__info__text}>

                      <img src={iconFour} alt="Иконка"/>
                      <p>
                        Возможно проживание с животными весом не более 5 кг за дополнительную плату </p>


                    </div>

                    </div>
                    <div className={classes.main__section__content__container__card__info__text}>

                      <img src={iconOne} alt="Иконка"/>
                      <p>
                        175 м2
                      </p>


                    </div>
                    <div className={classes.main__section__content__container__card__info__text}>

                      <img src={iconTwo} alt="Иконка"/>
                      <p>
                        До 6‑ти человек (также можно разместить до 3‑х детей до 3‑х лет включительно)
                      </p>


                    </div>
                    <div className={classes.main__section__content__container__card__info__text}>

                      <img src={iconThree} alt="Иконка"/>
                      <p>
                        Тип питания определяется в зависимости от тарифа
                      </p>


                    </div>
                    <div className={classes.main__section__content__container__card__info__text}>

                      <img src={iconFour} alt="Иконка"/>
                      <p>
                        Возможно проживание с животными весом не более 5 кг за дополнительную плату </p>


                    </div>


                    <div className={classes.main__section__content__container__card__info__status}>
                      <p>30.000₽/сутки</p>
                      <p><span
                          className={classes.main__section__content__container__card__info__status_color}>СВОБОДНО</span>
                      </p>
                    </div>

                  </div>
                </div>
                <div className={classes.main__section__content__container__bottom}>

                  <NavLink to="/info-page" style={{textDecoration:"none"}}>
                  <p>
                    Подробнее
                  </p>
                  </NavLink>

                  <p>
                    Подробнее
                  </p>

                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer/>
      </>
  );
};

export default Numbers;