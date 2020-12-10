import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import NavBarItem from './NavBarItem'
import './Home.css'

const axios = require('axios');

const NavBar = ({ getRecipesAndCategories, children }) => {
  const [isShowingAdd, setIsShowingAdd] = useState(false)
  const [newCategoryName, setNewCategoryName] = useState()

  const handleShow = () => {
    setIsShowingAdd(!isShowingAdd)
  }

  const handleAdd = async () => {
    try {
      axios({
        method: 'post',
        url: 'http://localhost:6969/category/create',
        data: {
          name: newCategoryName,
        }
        })
        .then(() => {
          getRecipesAndCategories()
          setIsShowingAdd(false)
        })
       } catch (error) {
      console.log(error);
    }
  }

  const handleInputChange = e => {
    setNewCategoryName(e.target.value)
  }

  return (
        <div className="categories">
          <Link to={'/'}> <NavBarItem>All</NavBarItem></Link>
          {children}
          <div className='addContainer'>
            <div className='addCategory' onClick={handleShow} />
            {isShowingAdd && <div className='addCategoryBox'><input className='addCategoryInput' type='text' name='newCategory' placeholder='Enter a new category...'  onChange={handleInputChange} /><div onClick={handleAdd}>Add</div></div>}
          </div>

        </div>
  );
}

export default NavBar;
