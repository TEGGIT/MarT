import React from 'react';
import classes from './Button.module.scss'

const Button = ({type, onClick}) => {
  return (

      <div className={classes.btn} onClick={onClick}>
        <button className={classes.btn_bron} type={type}>Бронировать</button>
      </div>
  );
};

export default Button;