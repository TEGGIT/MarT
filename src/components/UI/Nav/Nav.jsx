import React from 'react'
import classes from './Nav.module.scss'

const Nav = ({type, onClick, text, name}) => (
    <div className={classes.btn} onClick={onClick}>
      <button className={classes.btn_nav} type={type} name={name}>
        {text}
      </button>
    </div>
)

export default Nav
