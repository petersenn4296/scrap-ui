import React from 'react';
import { Link } from 'react-router-dom'
import NavBarItem from './NavBarItem'
import './Home.css'

const NavBar = ({ children }) => {
  return (
        <div className="categories">
          <Link to={'/'}> <NavBarItem>All</NavBarItem></Link>
          {children}
          <div className='addCategory'>Add</div>
        </div>
  );
}

export default NavBar;
