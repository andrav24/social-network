import React from 'react';
import classes from './Header.module.css'

const Header = () => {
  return (
      <header className={classes.header}>
        <img className={classes.logo} src="./images/logo.jpg" alt="logo"/>
      </header>
  )
}

export default Header;