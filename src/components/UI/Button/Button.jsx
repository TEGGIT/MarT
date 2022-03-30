import React from 'react'
import classes from './Button.module.scss'

const Button = ({ type, onClick, text, name }) => (
    <div className={classes.btn} onClick={onClick}>
      <button className={classes.btn_bron} type={type} name={name}>
        {text}
      </button>
    </div>
  )

export default Button
