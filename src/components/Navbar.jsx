import React from 'react';

const Navbar = () => {
  return (
      <nav className='nav'>
        <ul className='menu'>
          <li>
            <a className="menu__list" href="#" >Profile</a>
          </li>
          <li>
            <a className="menu__list" href="#" >Messages</a>
          </li>
          <li>
            <a className="menu__list" href="#" >News</a>
          </li>
          <li>
            <a className="menu__list" href="#" >Music</a>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar;