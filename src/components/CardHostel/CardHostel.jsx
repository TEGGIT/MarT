import React from 'react';
import classes from "../Numbers/Numbers.module.scss";

import {NavLink} from "react-router-dom";

const CardHostel = ({number}) => {
  return (
        <div className={classes.main__section__content__container}>
          <div className={classes.main__section__content__container__card}>
            <div className={classes.main__section__content__container__card__image}>
              <img src={number.image} alt="Изображение номера"/>
            </div>
            <div className={classes.main__section__content__container__card__info}>
              <div className={classes.main__section__content__container__card__info__text_top}>
                <p>
                  {number.category}
                </p>
              </div>
              {number.info.map((service) => {
                return (
                    <div className={classes.main__section__content__container__card__info__text}>
                      <img src={service.image} alt="Иконка"/>
                      <p>{service.description}</p>
                    </div>
                )
              })}
              <div className={classes.main__section__content__container__card__info__status}>
                <p>{`${number.price}₽/сутки`}</p>
                <p><span
                    className={classes.main__section__content__container__card__info__status_color}>СВОБОДНО</span>
                </p>
              </div>
            </div>
          </div>
          <NavLink
              to={`/info-page#${number.id}`}
              className={classes.main__section__content__container__bottom}
          >
            Подробнее
      </NavLink>
</div>
  );
};

export default CardHostel;