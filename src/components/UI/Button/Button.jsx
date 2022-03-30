import React from 'react';
import classes from './Button.module.scss'

const Button = ({
                  type,
                  onClick,
                  text,
                  name,
                  disabled
                }) => (
    <div
        className={classes.btn}
        onClick={onClick}
    >
      <button
          disabled={disabled}
          className={classes.btn_bron}
          type={type}
          name={name}
      >
        {text}
      </button>
    </div>
);

export default Button;