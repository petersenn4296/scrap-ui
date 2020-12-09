import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import NavBar from './NavBar';
import NavBarItem from './NavBarItem';
import Category from './Category';
import './Home.css'

const axios = require('axios');

const Home = () => {
  const [categories, setCategories] = useState([])

  const getRecipesAndCategories = async () => {
    try {
      const getAllCatergories = await axios.get(`category/all`, {baseURL: 'http://localhost:6969/'});
      setCategories(getAllCatergories.data);
    } catch (e) {
      console.log(e);
    }
  }

    useEffect(() => {
        getRecipesAndCategories()
    }, [])

  return (
    <div className='container'>
      <div className="header">
        Scrapr
      </div>
      <Router>
      <NavBar>
        {categories.map(category => {
           return (
             <Link
               key={category.id}
               to={'/' + category.name.toLowerCase()} 
             >
              <NavBarItem>{category.name}</NavBarItem>
             </Link>
           )
         })}   
      </NavBar>
       <div className='content'>
       <Route
       exact={true}
               path={'/'} 
               render={() => <Category id={null} />}
             />
         {categories.map(category => {
           return (
             <Route
               key={category.id}
               path={'/' + category.name} 
               render={() => <Category id={category.id} />}
             />
           )
         })}         
       </div>	
      </Router>
    </div>
  );
}

export default Home;
