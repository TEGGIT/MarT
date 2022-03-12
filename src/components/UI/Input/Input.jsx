import React from 'react';
import classes from './Input.module.scss'

const Input = ({title, name, type, placeholder}) => {
  return (
      <label className={classes.label}>
        {title}
        <input className={classes.label__input} name={name} type={type} placeholder={placeholder}/>
      </label>
  );
};

export default Input;