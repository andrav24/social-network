import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
      <nav className={classes.nav}>
        <ul className={classes.menu}>
          <li className={classes.item}>
            <a className={`${classes.link} ${classes.active}`} href="#" >Profile</a>
          </li>
          <li className={classes.item}>
            <a className={classes.link} href="#" >Messages</a>
          </li>
          <li className={classes.item}>
            <a className={classes.link} href="#" >News</a>
          </li>
          <li className={classes.item}>
            <a className={classes.link} href="#" >Music</a>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar;