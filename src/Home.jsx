import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './Home.css'
const axios = require('axios');

const Home = () => {
  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
    try {
      const response = await axios.get(`recipe/all`, {baseURL: 'http://localhost:6969/'});
      setRecipes(response.data)
    } catch (e) {
      console.log(e);
    }
  }

    useEffect(() => {
        getRecipes()
    }, [])

  return (
    <div className='container'>
      <div className="header">
        Scrapr
      </div>

      <div className='content'>
        {recipes.length > 0 && recipes.map(recipe => {
          return (
            <Recipe
              {...recipe}
              key={recipe.id}
            />
          )
        })}         
      </div>	
    </div>
  );
}

export default Home;
