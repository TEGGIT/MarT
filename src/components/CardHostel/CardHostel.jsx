import React from 'react';
import classes from "../Numbers/Numbers.module.scss";
import iconOne from "../../assets/IconNumbers1.svg";
import iconTwo from "../../assets/iconNumbers2.svg";
import iconThree from "../../assets/iconNumbers3.svg";
import iconFour from "../../assets/iconNumbers4.svg";
import {NavLink} from "react-router-dom";

const CardHostel = ({category, size, places,image,food,info,price}) => {
  return (
      <>
        <div className={classes.main__section__content__container}>
          <div className={classes.main__section__content__container__card}>

            <div className={classes.main__section__content__container__card__image}>
              <img src={image} alt="Изображение номера"/>


            </div>
            <div className={classes.main__section__content__container__card__info}>
              <div className={classes.main__section__content__container__card__info__text_top}>
                <p>
                  {category}
                </p>

              </div>
              <div className={classes.main__section__content__container__card__info__text}>

                <img src={iconOne} alt="Иконка"/>
                <p>
                  {size}
                </p>


              </div>
              <div className={classes.main__section__content__container__card__info__text}>

                <img src={iconTwo} alt="Иконка"/>
                <p>
                  {places}
                </p>


              </div>
              <div className={classes.main__section__content__container__card__info__text}>

                <img src={iconThree} alt="Иконкa"/>
                <p>
                  {food}
                </p>


              </div>
              <div className={classes.main__section__content__container__card__info__text}>

                <img src={iconFour} alt="Иконка"/>
                <p>
                  {info}
                </p>


              </div>

              <div className={classes.main__section__content__container__card__info__status}>
                <p>{price}</p>
                <p><span
                    className={classes.main__section__content__container__card__info__status_color}>СВОБОДНО</span>
                </p>
              </div>

            </div>
          </div>
          <NavLink to="/info-page" className={classes.main__section__content__container__bottom}>

              <p>
                Подробнее
              </p>

      </NavLink>

</div>

          
      </>
  );
};

export default CardHostel;