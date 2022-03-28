import React from 'react';
import classes from './Input.module.scss'

const Input = ({title, name, type, placeholder, onBlur, value,onChange, disabled, style}) => {

  return (

      <label className={classes.label}>
        {title}
        <input className={classes.label__input}   name={name} type={type} placeholder={placeholder} onBlur={onBlur} value={value} onChange={onChange} disabled={disabled} style={style} />
      </label>
  );
};

export default Input;